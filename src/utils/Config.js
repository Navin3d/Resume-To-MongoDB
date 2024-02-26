require('dotenv').config()

const PORTNO = process.env.PORTNO || 3001;
const DATABASE_URL = process.env.DATABASE_URL || `mongodb://root:secret@localhost:27017/project-management?authSource=admin`;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORTNO}`;
module.exports = {
    PORTNO,
    DATABASE_URL,
    BASE_URL,
};
