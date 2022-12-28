const mongoose = require("mongoose");
const SkillSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    users: []
});
const SkillModel = mongoose.model("Skills", SkillSchema);
module.exports = SkillModel;
