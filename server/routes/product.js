const router = require("express").Router();
const { getOneProduct } = require("../../db/models/product.js");
const { getAllFeatures } = require("../../db/models/features.js");
const { getStyles } = require("../../db/models/styles.js");
const { getAllPhotos } = require("../../db/models/photos.js");
const { getSkus } = require("../../db/models/skus.js");
// const StatsD = require("statsd-client");
// const client = StatsD({
//   host: "http://localhost"
// });
// console.log(client);
router.get("/:product_id", (req, res) => {
  const id = req.params.product_id;
  getOneProduct(id)
    .then(result => {
      res.send(result[0]);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

let asnycFor = async (styles, photos, skus) => {
  let results = [];
  for (let i = 0; i < styles.length; i++) {
    let photos = await getAllPhotos(styles[i].id);
    let skus = await getSkus(styles[i].id);
    styles[i].photos = photos[0];
    styles[i].skus = skus[0];
  }
  return styles;
};
router.get("/:product_id/styles", (req, res) => {
  getStyles(req.params.product_id).then(styles => {
    let resObj = {
      product_id: req.params.product_id,
      results: styles[0]
    };
    res.send(resObj);
    // getAllPhotos(req.params.product_id).then(photos => {
    //   getSkus(req.params.product_id).then(skus => {
    //     console.log(skus);
    //   });
    // });
  });
});

module.exports = router;
