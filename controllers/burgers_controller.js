const express = require("express")
const burgers = require("../models/burger.js")
const router = express.Router()

router.get("/", function (req, res) {
    console.log("GET")
    burgers.selectAll(function (data) {
        console.log(data)

        let hbobj = {
            burger: data
        }

        res.render("index", hbobj)
    })
})

router.post("/burger/create", function (req, res) {
    console.log("POST", req.body)
    const burgerName = req.body.burgerName
    console.log("burgerNmae: ", burgerName)
    burgers.insertOne(["burger_name"], [burgerName], function (result) {
        console.log(result)
        res.json(result)
    })


})

router.put("/burger/update/:ID", function(req,res){
    console.log("PUT", req.params)

    console.log(req.params)

    burgers.updateOne(req.params.ID,function(data){
        res.json(data)

    })
})










module.exports = router