const express = require("express");
const pdfRouter = express.Router();

const { statusCheck, jsonFormatter } = require("../services/pdf-service");

pdfRouter.get("/status", statusCheck);
pdfRouter.post("/single", jsonFormatter);

module.exports = pdfRouter;
