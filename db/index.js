const Sequelize = require("sequelize");

const sequelize = new Sequelize("greenFieldProducts", "postgres", "babaka11", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = sequelize;
