const express = require('express');
const router = express.Router();
const db = require('../config/connection.js');
const burgerName = require('../models/burgers.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get burger list
router.get('/', (req, res) => 
  burgerName.findAll()
    .then(burgers => res.render('burger', {
        burgers
      }))
    .catch(err => console.log(err)));

// Display add burger form
router.get('/add', (req, res) => res.render('add'));

// Add a burgers
router.post('/add', (req, res) => {
  let { name } = req.body;
  let errors = [];

    // Insert into table
    burgerName.create({
      name
    })
      .then(burgers => res.redirect('/burgers_controller.js'))
      .catch(err => console.log(err));
  });

module.exports = router;