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
/// photos style query was over 15+seconds and after indexing it is averaging 62ms
///skus query at 1.2second before query 89ms after
