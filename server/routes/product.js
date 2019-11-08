const router = require("express").Router();
const { getOne } = require("../../db/models/product.js");
const { getAll } = require("../../db/models/features.js");
router.get("/:product_id", (req, res) => {
  const id = req.params.product_id;
  getOne(id).then(result => {
    getAll(id).then(features => {
      product = result[0][0];
      product.features = features[0];
      res.send(product);
    });
  });
});

module.exports = router;
