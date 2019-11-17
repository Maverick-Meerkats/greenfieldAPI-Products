const csv = require("csv-parser");
const fs = require("fs");
const readline = require("readline");
const stream = require("stream");
const Photos = require("./models/photos.js");

const runInsert = async () => {
  let files = fs.readdirSync("../db-data/photo_split");
  for (let i = 0; i < 1; i++) {
    let results = [];
    let badData = [];
    let idCheck = {};
    const readInterface = readline.createInterface({
      input: fs.createReadStream(`../db-data/photo_split/${files[i]}`),
      output: new stream(),
      console: false
    });
    await readInterface.on("line", function(line) {
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
        if (idCheck[obj.id]) {
        } else {
          Photos.create(obj)
            .then(() => {})
            .catch(err => {
              console.log(`ERROR ON`, obj);
              console.log(err);
            });
        }
      }
    });
    await readInterface.on("close", function() {});
  }
};
// Photos.sync().then(() => {
//   runInsert();
// });
