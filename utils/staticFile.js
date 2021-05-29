const path = require("path");
// Static File Path for all the files.
const staticFilePath = (fileName) => {
  const filePath = path.join(__dirname, "../public", `/${fileName}.html`);
  return filePath;
};

module.exports = staticFilePath;
