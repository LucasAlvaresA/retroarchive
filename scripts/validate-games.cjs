const fs = require("node:fs");
const path = require("node:path");
const typescript = require("typescript");

const root = path.resolve(__dirname, "..");

require.extensions[".ts"] = (module, filename) => {
    const source = fs.readFileSync(filename, "utf8");
    const { outputText } = typescript.transpileModule(source, {
        compilerOptions: {
            module: typescript.ModuleKind.CommonJS,
            target: typescript.ScriptTarget.ES2020,
            esModuleInterop: true,
        },
    });

    module._compile(outputText, filename);
};

const { games, platformOrder } = require(path.join(root, "data", "games.ts"));
const errors = [];
const warnings = [];
const platforms = new Set(platformOrder);
const gameById = new Map();
const referencedCovers = new Set();
const imagesDirectory = path.join(root, "public", "images");

function requireText(value, label) {
    if (typeof value !== "string" || value.trim() === "") {
        errors.push(`${label} must be a non-empty string.`);
    }
}

function validateLocalized(value, label) {
    if (!value || typeof value !== "object") {
        errors.push(`${label} must contain English and Portuguese text.`);
        return;
    }

    requireText(value.en, `${label}.en`);
    requireText(value.pt, `${label}.pt`);
}

for (const game of games) {
    if (gameById.has(game.id)) {
        errors.push(`Duplicate game id "${game.id}".`);
    } else {
        gameById.set(game.id, game);
    }

    requireText(game.id, "Game id");
    requireText(game.title, `Title for "${game.id}"`);

    if (
        !Number.isInteger(game.releaseYear) ||
        game.releaseYear < 1970 ||
        game.releaseYear > new Date().getFullYear()
    ) {
        errors.push(`Invalid release year for "${game.id}": ${game.releaseYear}.`);
    }

    if (!platforms.has(game.platform)) {
        errors.push(`Unknown platform for "${game.id}": ${game.platform}.`);
    }

    if (game.coverImage) {
        if (!game.coverImage.startsWith("/images/")) {
            errors.push(`Cover for "${game.id}" must use a local /images/ path.`);
        } else {
            const coverPath = path.resolve(
                root,
                "public",
                game.coverImage.replace(/^\/+/, ""),
            );
            if (!coverPath.startsWith(imagesDirectory + path.sep)) {
                errors.push(`Cover path escapes the image directory for "${game.id}".`);
            } else if (!fs.existsSync(coverPath)) {
                errors.push(`Cover file does not exist for "${game.id}": ${game.coverImage}.`);
            } else {
                referencedCovers.add(path.basename(coverPath));
            }
        }
    } else {
        warnings.push(`No cover art for "${game.id}".`);
    }
}

const detailDirectory = path.join(root, "data", "game-details");
const detailIds = new Set();

for (const filename of fs
    .readdirSync(detailDirectory)
    .filter((name) => name.endsWith(".ts"))) {
    const { platform, gameDetails } = require(path.join(detailDirectory, filename));

    if (!platforms.has(platform)) {
        errors.push(`Unknown platform "${platform}" in ${filename}.`);
    }

    for (const [id, details] of Object.entries(gameDetails)) {
        if (detailIds.has(id)) {
            errors.push(`Duplicate details for "${id}".`);
        }
        detailIds.add(id);

        const game = gameById.get(id);
        if (!game) {
            errors.push(`Details exist without a catalog entry for "${id}".`);
            continue;
        }
        if (game.platform !== platform) {
            errors.push(`Details for "${id}" are grouped under the wrong platform.`);
        }

        validateLocalized(details.releaseDate, `Release date for "${id}"`);
        validateLocalized(details.genre, `Genre for "${id}"`);
        validateLocalized(details.description, `Description for "${id}"`);
        requireText(details.publisher, `Publisher for "${id}"`);
        requireText(details.developer, `Developer for "${id}"`);

        for (const language of ["en", "pt"]) {
            const facts = details.trivia && details.trivia[language];
            if (!Array.isArray(facts) || facts.length === 0) {
                errors.push(`Trivia for "${id}" must include ${language} facts.`);
            } else {
                facts.forEach((fact, index) =>
                    requireText(
                        fact,
                        `Trivia ${index + 1} for "${id}" (${language})`,
                    ),
                );
            }
        }
    }
}

for (const game of games) {
    if (!detailIds.has(game.id)) {
        errors.push(`No details found for "${game.id}".`);
    }
}

const unusedCovers = fs
    .readdirSync(imagesDirectory)
    .filter((name) => /^game-\d+\.(png|jpe?g|webp)$/i.test(name))
    .filter((name) => !referencedCovers.has(name));

if (errors.length > 0) {
    console.error(`Game data validation failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
} else {
    console.log(
        `Validated ${games.length} games across ${platformOrder.length} platforms.`,
    );
    console.log(
        `Cover art: ${games.length - warnings.length}/${games.length} entries have a local cover; the rest use the designed fallback.`,
    );
    if (warnings.length > 0) {
        const missingCoverIds = warnings.map((warning) =>
            warning.slice("No cover art for ".length, -1),
        );
        console.warn(`Entries without cover art: ${missingCoverIds.join(", ")}`);
    }
    if (unusedCovers.length > 0) {
        console.warn(`Unreferenced game cover files: ${unusedCovers.join(", ")}`);
    }
}
