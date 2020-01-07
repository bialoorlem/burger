//Worked with Michell on these routes

const db = require("../models");


module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    db.Burger.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
        console.log(dbPost)
      });
  });




  // POST route for saving a new post
  app.post("/add", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burgerName: req.body.title,
      devoured: false
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  
};
