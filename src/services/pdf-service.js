var fs = require('fs');
const pdf = require('pdf-parse');
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();


const statusCheck = (req, res) => (
    res.status(200).json({
        status: "200 OK",
        message: "Server is Up..."
    })
);

const simplePdfUpload= (req, res) => {
    upload(req, res, (err) => {
        let dataBuffer = fs.readFileSync(req.files[0].path);  
        pdf(dataBuffer).then(function(data) {
            res.send({"jsondata":data,})
        })
        .catch(function(error){
        })
    })
}

const extractText = async (req, res) => {
//     const buffer = fs.readFileSync(req.files[0].path);

    let fileData = req.files.files["data"];
    const options = {}; /* see below */
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
