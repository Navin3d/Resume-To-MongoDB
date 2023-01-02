const express = require("express");
const pdfRouter = express.Router();

const { saveAUser } = require("../services/user-service");
const { statusCheck, jsonFormatter, parseAResume, showAFile } = require("../services/pdf-service");

pdfRouter.get("/status", statusCheck);
pdfRouter.get("/single", showAFile);
pdfRouter.post("/single", jsonFormatter);
pdfRouter.post("/single/v2", async (req, res) => {
    const fileName = req.files.file["name"];
    const fileBuffer = req.files.file["data"];
    // console.log(fileBuffer)
    const resumeData = await parseAResume(fileName, fileBuffer);
    await saveAUser(resumeData);
    return res.status(200).json(resumeData);
    // return res.send("jnjn");
});
pdfRouter.post("/multiple", async (req, res) => {
    let files = req.files.file;
    console.log(files)
    var returnValue = [];
    for(let file of files) {
        console.log(file.data)
        const fileName = file["name"];
        const fileBuffer = file["data"];
        const parsedData = await parseAResume(fileName, fileBuffer);
        await saveAUser(parsedData);
        returnValue.push(parsedData);
    }
    return res.status(200).json(returnValue);
    // return res.send("jnjn");
});

module.exports = pdfRouter;
