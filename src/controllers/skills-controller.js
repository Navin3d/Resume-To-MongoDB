const express = require("express");
const skillController = express.Router();
const { findAllSkills, getASkill, saveSkill } = require("../services/skill-service");

skillController.get("", async (req, res) => {
    const allSkills = await findAllSkills();
    return res.status(200).json(allSkills);
});
skillController.get("/:skillId", getASkill);
skillController.post("", saveSkill);

module.exports = skillController;
