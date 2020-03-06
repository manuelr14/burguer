let express = require("express");

let router = express.Router();

// Import the model (cat.js) to use its database functions.
let burguer = require("../models/burguer.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burguer.all(function(data) {
    let hbsObject = {
      burguers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burguers", (req, res) => {
  burguer.create([
    "burguer_name", "devoured"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burguers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burguer.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burguer.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;


