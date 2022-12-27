const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();


const statusCheck = (req, res) => (
    res.status(200).json({
        status: "200 OK",
        message: "Server is Up..."
    })
);

const extractText = async (req, res) => {
    let fileData = req.files.files["data"];
    const options = {};
    pdfExtract.extractBuffer(fileData, options, (err, data) => {
        if (err) return console.log(err);
        console.log(data);
        return res.send(data);
    });
}

module.exports = {
    statusCheck,
    extractText
}
