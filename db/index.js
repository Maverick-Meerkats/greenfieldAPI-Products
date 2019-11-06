const { Pool, Client } = require("pg");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("greenFieldProducts", "postgres", "babaka11", {
  host: "localhost",
  dialect: "postgres",
  port: 5432
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// sequelize.close();
// const pool = new Pool({
//   user: "postgres",
//   host: "127.0.0.1",
//   database: "greenFieldProducts",
//   password: "babaka11",
//   port: 5432
// });
// pool.on("error", (err, client) => {
//   console.error("Unexpected error on idle client", err);
//   process.exit(-1);
// });

// sequelize.query("DROP TABLE IF EXISTS productInfo;").then((err, res) => {
//   console.log(err, res);
// });
// sequelize
//   .query(
//     `DROP TABLE IF EXISTS productInfo;
//   CREATE TABLE productInfo(
//             id INT PRIMARY KEY,
//             name VARCHAR(100),
//             slogan character varying,
//             description TEXT,
//             category VARCHAR(255),
//             default_price VARCHAR(50)
//             );
//    CREATE TABLE features (
//             id INT PRIMARY KEY,
//             product_id INT,
//             feature VARCHAR(55),
//             value VARCHAR(55)
//             );
//             COPY productInfo(id,name,slogan,description,category, default_price)
//             FROM 'C:\\DatabaseData\\product.csv' DELIMITER ',' CSV HEADER;
//             COPY features(id,product_id,feature,value)
//             FROM 'C:\\DatabaseData\\features.csv' DELIMITER ',' CSV HEADER;
//             UPDATE productInfo SET default_price=trim(default_price);
//             UPDATE productInfo SET default_price=trim(leading 'default_price: ' from default_price);`
//   )
//   .then((err, res) => {
//     console.log(err, res);
//     sequelize
//       .query(`SELECT * FROM productInfo where id = 11;`)
//       .then((err, res) => console.log(err, res));
//   });
sequelize
  .query(`SELECT * FROM features where id = 11;`)
  .then((err, res) => console.log(err, res));

// pool.query(
//   `COPY productInfo(id,name,description,category,price)
// FROM 'C:\DatabaseData\product.csv' DELIMITER ',' CSV HEADER;`,
//   (err, res) => {
//     console.log(err, res);
//   }
// );
