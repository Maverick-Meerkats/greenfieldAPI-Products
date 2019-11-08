const sequelize = require("../index.js");
const Sequelize = require("sequelize");

module.exports = {
  getAll: id => {
    return sequelize.query(
      `SELECT feature, value FROM features where product_id=${id}`
    );
  }
};
