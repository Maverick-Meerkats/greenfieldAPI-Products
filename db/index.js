const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:babaka11@localhost:5432/greenFieldProducts"
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.log("Unable to connect to the database:", err);
  });
// sequelize.query(`UPDATE photos SET url=trim(leading '"' from url);`);
// sequelize.query(`CREATE INDEX photos_index ON photos("styleId" ASC NULLS LAST);
// CREATE INDEX styles_index ON styles(productId ASC NULLS LAST);
// CREATE INDEX skus_index ON skus(styleId ASC NULLS LAST);
// CREATE INDEX features_index ON features(product_id ASC NULLS LAST);`)
module.exports = sequelize;
/// photos style query was over 15+seconds and after indexing it is averaging 62ms
///skus query at 1.2second before query 89ms after
