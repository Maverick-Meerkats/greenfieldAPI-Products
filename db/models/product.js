const sequelize = require("../index.js");

module.exports = {
<<<<<<< HEAD
  getOneProduct: id => {
=======
  getOne: id => {
>>>>>>> master
    return sequelize.query(
      `SELECT * FROM productInfo WHERE productInfo.id=${id}`
    );
  }
};
