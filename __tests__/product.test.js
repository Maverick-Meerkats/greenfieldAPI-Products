const request = require("supertest");
const express = require("express");
const router = require("../server/routes/product");
const bodyParser = require("body-parser");

const app = express();
app.use("/products/", router);

test("should return the correct object from database", async done => {
  let t0 = performance.now();
  const res = await request(app).get("/products/6792");
  let t1 = performance.now();
  expect(res.status).toBe(200);
  expect(res.body.id).toBe(6792);
  expect(res.body.features.length).toBe(4);
  expect(t1 - t0).toBeLessThanOrEqual(50);
  done();
});
