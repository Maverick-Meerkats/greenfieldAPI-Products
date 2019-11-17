const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:babaka11@172.18.0.2:5432/greenFieldProducts",
  { logging: false }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.log("Unable to connect to the database:", err);
  });

module.exports = sequelize;
