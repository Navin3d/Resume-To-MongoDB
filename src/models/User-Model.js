const mongoose = require("../utils/db");
const UserSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    user_id: {
        type: String,
        unique: true
    },
    name: String,
    mobileNumber: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    links: [String]
});
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
