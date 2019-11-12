const sequelize = require("../index.js");

module.exports = {
  getOneProduct: id => {
    return sequelize.query(
      `SELECT * FROM productInfo WHERE productInfo.id=${id}`
    );
  }
};
