const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:babaka11@ec2-18-222-186-179.us-east-2.compute.amazonaws.com:5432/greenFieldProducts",
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
