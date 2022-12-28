const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const UserSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    mobileNumber: String,
    email: String,
    summary: String,
    experience: String,
    education: String,
    licenseAndCertification: String,
    links: [String]
});
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
