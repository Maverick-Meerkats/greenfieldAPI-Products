const express = require("express");
const app = express();
const list = require("./routes/list.js");
const product = require("./routes/product.js");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/products/list", list);
app.use("/products/", product);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on port ", port));
