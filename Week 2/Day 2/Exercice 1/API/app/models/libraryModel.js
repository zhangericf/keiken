const sql = require("./db.js");

// constructor
const Library = function(tutorial) {
  this.libraryName = tutorial.libraryName;
};

Library.getLibrary = (title, result) => {
  let query = "SELECT * FROM Library";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("library: ", res);
    result(null, res);
  });
};

module.exports = Library;