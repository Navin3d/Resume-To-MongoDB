const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();


const statusCheck = (req, res) => (
    res.status(200).json({
        status: "200 OK",
        message: "Server is Up..."
    })
)

const extractTextFromPdf = async (fileData) => {
    const data = await pdfExtract.extractBuffer(fileData);
    return data;
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

const validateMobileNumber = (input_str) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
    return re.test(input_str);
}

const jsonFormatter = async (req, res) => {
    const returnValue = {};
    const TOPSECTIONNAME = "boomerism";
    const headers = ["summary", "experience", "education", "licenses & certifications", "skills", "honors & awards", "profile info", "projects", "acheivements"];
    const data = await extractTextFromPdf(req.files.files["data"]);
    var activeHeader = TOPSECTIONNAME;
    for(let pageIndex in data.pages) {
        let page = data.pages[pageIndex];
        for(let content of page.content) {
            if(activeHeader === TOPSECTIONNAME) {
                if(page.content[0].str.split(" ").length > 1) {
                    returnValue["firstName"] = page.content[0].str.split(" ")[0];
                    returnValue["lastName"] = page.content[0].str.split(" ")[1];
                } else {
                    returnValue["name"] = page.content[0].str.split(" ");
                }                
                // console.log(content.str + " " + validateMobileNumber(content.str));
            }
            if(headers.includes(content.str.trim().toLowerCase())) {
                activeHeader = content.str.trim().toLowerCase();
                console.log("=====> Active Header: ", activeHeader);
                returnValue[`${activeHeader}`] = "";
            }
            if(content.str.trim().length > 0 && activeHeader !== TOPSECTIONNAME) {
                returnValue[`${activeHeader}`] += ((headers.includes(content.str.trim().toLowerCase())) ? "" : content.str.trim()) + " ";
            }
            if(validateEmail(content.str)) {
                returnValue["email"] = content.str;
            }
            if(validateMobileNumber(content.str)) {
                returnValue["mobileNumber"] = content.str;
            }
        }
        if(returnValue["links"]) {
            for(let link of page.links) {
                returnValue["links"].push(link);
            }
        } else {
            returnValue["links"] = page.links
        }
    }
    returnValue.skills = returnValue.skills.split(" • ");
    return res.status(200).json(returnValue);
}

module.exports = {
    statusCheck,
    jsonFormatter
}
