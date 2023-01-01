const uuid = require("uuid");
const UserModel = require("../models/User-Model");
const SkillModel = require("../models/Skill-Model");
const { findAllSkills, addUsersToManySkills } = require("../services/skill-service");


const getAllUsers = async (req, res) => {
    var foundUsers;
    try {
        foundUsers = await UserModel.find({});
    } catch (e) {
        console.log(`=====> ERROR CONNECTING TO DB <======`);
        console.error(e);
        throw e;
    }
    return res.status(200).json({
        message: "Data fetched...",
        data: foundUsers
    });
}

const findAUser = async (userId) => {
    var foundUser;
    try {
        foundUser = await UserModel.findOne({ user_id: userId });
    } catch (e) {
        console.log(`=====> ERROR CONNECTING TO DB <======`);
        console.error(e);
        throw e;
    }
    return foundUser;
}

const saveAUser = async (user) => {
    var saved, waiter;
    const skills = user.skills.split(" ");
    console.log(skills);
    const allSkills = await findAllSkills();
    let detached = new UserModel(user);
    let exists = await UserModel.count({ email: detached.email });
    exists += await UserModel.count({ mobile_number: detached.mobile_number });
    exists += await UserModel.count({ user_id: detached.user_id });
    if (exists > 0) {
        saved = await UserModel.updateOne(detached);
        saved = detached;
    } else {
        detached.user_id = uuid.v4();
        saved = await UserModel.create(detached);
    }
    let finalUpdatedSkills = [];
    for(let skill of allSkills) {
        const keyWords = skill.keywords;
        for(let userSkill of skills) {
            console.log(userSkill.toLowerCase() + " - " + keyWords.includes(userSkill.toLowerCase()));
            if(keyWords.includes(userSkill.toLowerCase()) && !skill.users.includes(saved)) {
                skill.users.push(saved);
                console.log(skill);
                skill.save();
                finalUpdatedSkills.push(skill);
            }
        }
    }
    // waiter = await addUsersToManySkills(finalUpdatedSkills);
    return saved;
}

const deleteAllUsers = async (req, res) => {
    await UserModel.deleteMany({});
    return res.status(200).json("Deleted...");
}

module.exports = {
    getAllUsers,
    findAUser,
    saveAUser,
    deleteAllUsers,
}
