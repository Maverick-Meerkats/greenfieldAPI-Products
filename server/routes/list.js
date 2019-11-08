const router = require("express").Router();
const { getAll } = require("../../db/models/productList.js");
router.get("/", (req, res) => {
  getAll().then(results => {
    res.send(results);
  });
});

module.exports = router;
