const sequelize = require("../index.js");

module.exports = {
  getStyles: id => {
    return sequelize.query(`SELECT * FROM styles WHERE styles.productid=${id}`);
  }
};
