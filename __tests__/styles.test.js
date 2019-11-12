const request = require("supertest");
const express = require("express");
const router = require("../server/routes/product");
const bodyParser = require("body-parser");

const app = express();
app.use("/products/", router);

test("should return the correct object from database", async done => {
  const res = await request(app).get("/products/6792/styles");
  console.log(res);
  expect(res.status).toBe(200);
  expect(res.body.product_id).toBe("6792");
  expect(res.body.results[0].name).toBe("Grey");
  done();
});
