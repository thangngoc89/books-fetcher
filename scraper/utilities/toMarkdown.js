const pify = require("pify")
const fs = pify(require("fs"))

const generateFileContent = (frontmatter, content) => (
  JSON.stringify(frontmatter) + "\n" + content
)

const writeFileContent = (path, { fontmatter, content}) => (
  fs.writeFile(path, { frontmatter, content})
)

module.exports = writeFileContent
