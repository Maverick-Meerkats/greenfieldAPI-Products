const sequelize = require("../index.js");
const Sequelize = require("sequelize");

module.exports = {
  getAll: (limit = 5, offset = 0) => {
    return sequelize.query(
      `SELECT * FROM productInfo ORDER BY id LIMIT ${limit}`
    );
  }
};
