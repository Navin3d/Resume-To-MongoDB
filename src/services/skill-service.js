const uuid = require("uuid");
const SkillModel = require("../models/Skill-Model");


const getASkill = async (req, res) => {
    const { skillId } = req.params;
    let foundSkill;
    try {
        foundSkill = await SkillModel.findOne({ skill_id: skillId });
    } catch (e) {
        console.error(`=====> ERROR CONNECTING TO DB <======`);
        console.log(e);
        return res.status(200).json({
            skillId,
            message: "Unable to Connect Db at the moment..."
        });
    }
    if(!foundSkill) {
        return res.status(404).json({
            skillId,
            message: "Unable to find the Skill..."
        });
    }
    return res.status(200).json(foundSkill);
}

const saveSkill = async (req, res) => {
    const body = req.body;
    let saved;
    let detached = new SkillModel(body);
    if(body.skill_id) {
        saved = await SkillModel.updateOne(detached);
        saved = detached;
    } else {
        detached = new SkillModel(body);
        detached.skill_id = uuid.v4();
        saved = await SkillModel.create(detached);
    }
    return res.status(200).json({
        message: "Saved Skill...",
        data: saved
    });
}

module.exports = {
    getASkill,
    saveSkill,
}
