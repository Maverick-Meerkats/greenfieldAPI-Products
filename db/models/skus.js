const sequelize = require("../index.js");

module.exports = {
  getSkus: id => {
    return sequelize.query(
      `SELECT size, quantity FROM skus WHERE styleId=${id}`
    );
  }
};
