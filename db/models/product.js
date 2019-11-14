const sequelize = require("../index.js");

module.exports = {
  getOneProduct: id => {
    return sequelize.query(
      `SELECT p.id,p.name,p.slogan,p.description,p.category,p.default_price, 
      json_agg(json_build_object('feature', f.feature,'value',f.value)) as features from productInfo p
      INNER JOIN features f ON p.id = f.product_id where p.id=${id} GROUP BY p.id`
    );
  }
};
