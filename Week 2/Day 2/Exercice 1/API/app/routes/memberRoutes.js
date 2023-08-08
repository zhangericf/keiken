module.exports = app => {
    const member = require("../controllers/memberController.js");
  
    var router = require("express").Router();
  
    // Create a new Member
    router.post("/", member.create);
  
    // Retrieve all Members
    router.get("/", member.findAll);
  
    // Retrieve a single Member with id
    router.get("/:id", member.findOne);
  
    // Update a Member with id
    router.put("/:id", member.update);
  
    // Delete a Member with id
    router.delete("/:id", member.delete);
  
    app.use('/api/member', router);
};