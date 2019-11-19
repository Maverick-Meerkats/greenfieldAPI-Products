const express = require("express");
const app = express();
const list = require("./routes/list.js");
const product = require("./routes/product.js");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/products/list", list);
app.use("/products/", product);
app.get("/loaderio-8c8727fe1bbb608f32958165607720be/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "loaderio-8c8727fe1bbb608f32958165607720be.txt")
  );
});

const port = 3000;
app.listen(port, () => console.log("listening on port ", port));
