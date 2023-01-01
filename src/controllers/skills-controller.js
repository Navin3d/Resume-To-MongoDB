const express = require("express");
const skillController = express.Router();
const { getASkill, saveSkill } = require("../services/skill-service");

skillController.get("/:skillId", getASkill);
skillController.post("", saveSkill);

module.exports = skillController;
