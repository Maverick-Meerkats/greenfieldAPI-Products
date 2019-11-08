const sequelize = require("../index.js");

module.exports = {
  getOne: id => {
    return sequelize.query(
      `SELECT * FROM productInfo WHERE productInfo.id=${id}`
    );
  }
};
