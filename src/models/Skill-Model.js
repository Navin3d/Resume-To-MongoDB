const mongoose = require("mongoose");
const SkillSchema = new mongoose.Schema({
    skill_id: String,
    title: String,
    description: String,
    keywords: [],
    users: []
});
const SkillModel = mongoose.model("Skills", SkillSchema);
module.exports = SkillModel;
