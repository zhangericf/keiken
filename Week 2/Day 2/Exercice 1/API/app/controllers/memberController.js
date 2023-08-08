const Member = require("../models/memberModel.js");
const Library = require("../models/libraryModel.js");

// Create and Save a new Member
exports.create = (req, res) => {
  const title = req.query.title;
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Library.getLibrary(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else {
      // Create a Member
      const member = new Member({
        MemberName: req.body.MemberName,
        MemberAddress: req.body.MemberAddress,
        LibraryId: data[0].LibraryId
      });

      // Save Member in the database
      Member.create(member, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Member.",
          });
        else res.send(data);
      });
    }
  });
};

// Find a single Member with a id
exports.findOne = (req, res) => {
  Member.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Member with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Member with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.findAll = (req, res) => {
  const title = req.query.title;

  Member.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};

// Update a Member identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);
  console.log(req.params);

  Member.updateById(req.params.id, new Member(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Member with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Member with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Delete a Member with the specified id in the request
exports.delete = (req, res) => {
  Member.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Member with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Member with id " + req.params.id,
        });
      }
    } else res.send({ message: `Member was deleted successfully!` });
  });
};

// Delete all Members from the database.
exports.deleteAll = (req, res) => {
  Member.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials.",
      });
    else res.send({ message: `All Members were deleted successfully!` });
  });
};
