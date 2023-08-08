module.exports = app => {
    const library = require("../controllers/libraryController.js");
  
    var router = require("express").Router();
  
    // Retrieve all Tutorials
    router.get("/", library.getLibrary);
  
    app.use('/api/library', router);
};