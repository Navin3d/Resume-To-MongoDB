const express = require("express");
const pdfRouter = express.Router();

const { statusCheck, extractText } = require("../services/pdf-service");

pdfRouter.get("/status", statusCheck);
pdfRouter.post("/single", extractText);

module.exports = pdfRouter;
