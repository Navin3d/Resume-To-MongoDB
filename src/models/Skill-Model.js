const mongoose = require("../utils/db");
const SkillSchema = new mongoose.Schema({
    skill_id: {
        type: String,
        unique: true
    },
    title: String,
    description: String,
    keywords: [],
    users: []
});
const SkillModel = mongoose.model("Skills", SkillSchema);
module.exports = SkillModel;
