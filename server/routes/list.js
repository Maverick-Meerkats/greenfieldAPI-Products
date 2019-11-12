const router = require("express").Router();
const { getAll } = require("../../db/models/productList.js");
// const StatsD = require("statsd-client");
// const client = StatsD({
//   host: "http://localhost"
// });
// console.log(client);
router.get("/", (req, res) => {
  getAll()
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
