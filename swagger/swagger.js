/**
 * Combine different document into the main document
 */
const YAML = require("yamljs");
const { join } = require("path");

const swaggerDoc = YAML.load(join(__dirname, "./swagger.yaml"));
const usersDoc = YAML.load(join(__dirname, "./users.yaml"));

swaggerDoc.paths = {
  ...swaggerDoc.paths,
  ...usersDoc.paths,
};

module.exports = swaggerDoc;
