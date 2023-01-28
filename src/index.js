const express = require("express");
const pdf2json = express();
const bodyParser = require("body-parser");
const expressFileUpload = require("express-fileupload");
const cors = require("cors");
const { PORTNO } = require("./utils/Config");
const pdfController = require("./controllers/pdf-controller");
const skillController = require("./controllers/skills-controller");
const userController = require("./controllers/user-controller");
pdf2json.use(bodyParser.urlencoded({ extended: false }));
pdf2json.use(bodyParser.json());
pdf2json.use(expressFileUpload());
pdf2json.use(cors());
pdf2json.get("/", (req, res) => {
    return res.status(200).json({
        statusCode: 200,
        message: "the server is UP..."
    });
});
pdf2json.use("/pdf", pdfController);
pdf2json.use("/skill", skillController);
pdf2json.use("/user", userController);
pdf2json.listen(PORTNO, () => { console.log(`Server started in port ${PORTNO}.`) });
