const mongoose = require("../utils/db");
const UserSchema = new mongoose.Schema({
    user_id: {
        type: String,
        unique: true
    },
    name: String,
    firstName: String,
    lastName: String,
    place: String,
    mobile_number: String,
    email: {
        type: String,
        unique: true
    },
    summary: String,
    education: String,
    awards: String,
    honors: String,
    links: [String],
    skills: [String]
});
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
