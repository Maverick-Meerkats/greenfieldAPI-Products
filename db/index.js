const { Pool, Client } = require("pg");
const Sequelize = require("sequelize");
const csv = require("csv-parser");
const fs = require("fs");
const readline = require("readline");
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
const Photos = sequelize.define(
  "photos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    // attributes
    styleId: {
      type: Sequelize.INTEGER
    },
    url: {
      type: Sequelize.TEXT
    },
    thumbnail_url: {
      type: Sequelize.TEXT
    }
  },
  {
    // options
  }
);
Photos.sync({ force: true }).then(() => {
  let results = [];
  let badData = [];
  let files = fs.readdirSync("./db/photo_split");

  const readInterface = readline.createInterface({
    input: fs.createReadStream(`./db/photo_split/${files[0]}`),
    console: false
  });
  readInterface.on("line", function(line) {
    let lineArr = line.split(",");
    const obj = {};
    lineArr[0] ? (obj.id = lineArr[0].trim()) : 0;
    lineArr[1] ? (obj.styleId = lineArr[1].trim()) : 9999;
    lineArr[2] ? (obj.url = lineArr[2].trim().toString()) : "habg";
    lineArr[3] ? (obj.thumbnail_url = lineArr[3].trim().toString()) : "jabg";
    if (
      typeof Number(obj.id) === "number" &&
      typeof Number(obj.styleId) === "number" &&
      obj.url &&
      obj.thumbnail_url
    ) {
      Photos.create(obj);
    }
  });
});

// sequelize.query(
//   `DROP TABLE IF EXISTS productInfo;
//     DROP TABLE IF EXISTS features;
//     DROP TABLE IF EXISTS related;
//     DROP TABLE IF EXISTS skus;
//     DROP TABLE IF EXISTS styles;

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
//     CREATE TABLE related (
//             id INT PRIMARY KEY,
//             current_product_id INT,
//             related_product_id INT
//             );
//     CREATE TABLE skus (
//             id INT PRIMARY KEY,
//             styleId INT,
//             size VARCHAR(20),
//             quantity INT
//              );
//     CREATE TABLE styles (
//         id INT PRIMARY KEY,
//         productId INT,
//         name VARCHAR(60),
//         sale_price VARCHAR(5),
//         original_price INT,
//         default_style SMALLINT
//     );

//           COPY productInfo(id,name,slogan,description,category, default_price)
//           FROM 'C:\\DatabaseData\\product.csv' DELIMITER ',' CSV HEADER;

//           COPY features(id,product_id,feature,value)
//           FROM 'C:\\DatabaseData\\features.csv' DELIMITER ',' CSV HEADER;

//           COPY related(id,current_product_id,related_product_id)
//           FROM 'C:\\DatabaseData\\related.csv' DELIMITER ',' CSV HEADER;

//           COPY skus(id, styleId,size, quantity)
//           FROM 'C:\\DatabaseData\\skus.csv' DELIMITER ',' CSV HEADER;

//           UPDATE productInfo SET default_price=trim(default_price);
//           UPDATE productInfo SET default_price=trim(leading 'default_price: ' from default_price);
//           COPY styles (id,productId,name,sale_price,original_price,default_style)
//           FROM 'C:\\DatabaseData\\styles.csv' DELIMITER ',' CSV HEADER;`
// );

//   .then((err, res) => {
//     console.log(err, res);
//     sequelize
//       .query(`SELECT * FROM photos where id = 694;`)
//       .then((err, res) => console.log(err, res));
//   });

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
//   .query(`SELECT * FROM related where id = 11;`)
//   .then((err, res) => console.log(err, res));
// pool.query(
//   `COPY productInfo(id,name,description,category,price)
// FROM 'C:\DatabaseData\product.csv' DELIMITER ',' CSV HEADER;`,
//   (err, res) => {
//     console.log(err, res);
//   }
// );
