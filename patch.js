const fs = require("node:fs");
const child_process = require("node:child_process");

const file = require("./version");

const newVersion = file.version + 1;
const content = `module.exports = {
  version: ${newVersion},
};`;

try {
  fs.writeFileSync("./version.js", content);

  child_process.execSync(
    `rm -rf dist ; mkdir dist ; zip -r ./dist/api.zip ./version.js`,
  );
} catch (err) {
  console.error(err);
}
