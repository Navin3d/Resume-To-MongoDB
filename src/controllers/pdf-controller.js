const express = require("express");
const pdfRouter = express.Router();

const { saveAUser } = require("../services/user-service");
const { statusCheck, jsonFormatter, parseAResume, showAFile } = require("../services/pdf-service");

pdfRouter.get("/status", statusCheck);
pdfRouter.get("/single", showAFile);
pdfRouter.post("/single", jsonFormatter);
pdfRouter.post("/single/v2", async (req, res) => {
    const fileName = req.files.files["name"];
    const fileBuffer = req.files.files["data"];
    const resumeData = await parseAResume(fileName, fileBuffer);
    await saveAUser(resumeData);
    return res.status(200).json(resumeData);
});
pdfRouter.post("/multiple", async (req, res) => {
    let files = req.files["files"];
    var returnValue = [];
    for(let file of files) {
        const fileName = file["name"];
        const fileBuffer = file["data"];
        const parsedData = await parseAResume(fileName, fileBuffer);
        returnValue.push(parsedData);
    }
    return res.status(200).json(returnValue);
});

module.exports = pdfRouter;
