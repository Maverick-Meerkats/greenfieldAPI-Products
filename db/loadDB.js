// const csv = require("csv-parser");
// const fs = require("fs");
// const readline = require("readline");
// const stream = require("stream");

// const runInsert = async () => {
//   let files = fs.readdirSync("./db/photo_split");
//   // for (let i = 50; i < 54; i++) {
//   let results = [];
//   let badData = [];
//   let idCheck = {};
//   const readInterface = readline.createInterface({
//     input: fs.createReadStream(`./db/photo_split/xal`),
//     output: new stream(),
//     console: false
//   });
//   await readInterface.on("line", function(line) {
//     let lineArr = line.split(",");
//     const obj = {};
//     lineArr[0] ? (obj.id = lineArr[0].trim()) : 0;
//     lineArr[1] ? (obj.styleId = lineArr[1].trim()) : 9999;
//     lineArr[2] ? (obj.url = lineArr[2].trim().toString()) : "habg";
//     lineArr[3] ? (obj.thumbnail_url = lineArr[3].trim().toString()) : "jabg";
//     if (
//       typeof Number(obj.id) === "number" &&
//       typeof Number(obj.styleId) === "number" &&
//       obj.url &&
//       obj.thumbnail_url
//     ) {
//       if (idCheck[obj.id]) {
//         badData.push(obj);
//       } else {
//         idCheck[obj.id] = true;
//         results.push(obj);
//       }
//     }
//   });
//   await readInterface.on("close", function() {
//     Photos.bulkCreate(results)
//       .then(() => {
//         console.log("completed xal");
//       })
//       .catch(err => {
//         console.log("ERROR ON xal");
//         console.error(err);
//       });
//   });
//   // }
// };
// Photos.sync().then(() => {
//   runInsert();
// });

// sequelize.query();
