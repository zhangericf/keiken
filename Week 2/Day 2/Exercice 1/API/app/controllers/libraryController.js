const Library = require("../models/libraryModel.js");

exports.getLibrary = (req, res) => {
  const title = req.query.title;

  Library.getLibrary(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data[0]);
  });
};