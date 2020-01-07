//Worked with Michell on these routes

const db = require("../models");


module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/burgers", function(req, res) {
    db.burgers.findAll({})
      .then(function(burgers) {
        res.json(burgers);
        console.log(burgers)
      });
  });




  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: false
    })
      .then(function(burgers) {
        res.json(burgers);
      });
  });

  


    // PUT route for updating a burger
  // app.put("/api/burgers/:id", function(req, res) {
  //   console.log(req.body);
  //   db.Burger.update({
  //     devoured: true
  //   },
  //   {
  //     where: {id: req.params.id}
  //   }
  //   )
  //     .then(function(Burger) {
  //       res.json(Burger);
  //     });
  // });

  

};