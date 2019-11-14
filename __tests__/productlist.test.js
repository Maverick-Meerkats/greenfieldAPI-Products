const request = require("supertest");
const express = require("express");
const router = require("../server/routes/list");
const bodyParser = require("body-parser");

const app = express();
app.use("/products/list", router);

test("produces a list of 5 products", async done => {
  const res = await request(app).get("/products/list");
  expect(res.status).toBe(200);
  expect(res.body[0].length).toBe(5);
  expect(res.body[0][0].id).toBe(1);
  expect(res.body[0][0].name).toBe("Camo Onesie");
  done();
});
