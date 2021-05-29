const fs = require("fs");
const path = require("path");
// function which writes new notes to the database files.
const writeToDb = (data) => {
  const filePath = path.join(__dirname, "../db/db.json");
  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = writeToDb;
