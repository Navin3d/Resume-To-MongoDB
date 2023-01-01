const express = require("express");
const pdf2json = express();
const bodyParser = require("body-parser");
const expressFileUpload = require("express-fileupload");

const pdfController = require("./controllers/pdf-controller");
const skillController = require("./controllers/skills-controller");

pdf2json.use(bodyParser.urlencoded({ extended: false }));
pdf2json.use(bodyParser.json());
pdf2json.use(expressFileUpload());

pdf2json.use("/pdf", pdfController);
pdf2json.use("/skill", skillController);

pdf2json.listen(3000, () => { console.log("Server started in port 3000.") });
