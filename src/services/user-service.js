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
    const skills = user.skills;
    const allSkills = await findAllSkills();
    let detached = new UserModel(user);
    let existsWithEmail = await UserModel.count({ email: detached.email });
    if (existsWithEmail != 0) {
        // console.log(detached);
        saved = await UserModel.findOne({ email: detached.email });
        saved.firstname = detached.firstName;
        saved.lastName = detached.lastName;
        saved.place = detached.place;
        saved.name = detached.name;
        saved.mobile_number = detached.mobile_number;
        saved.links = detached.links;
        saved.education = detached.education;
        saved.skills = detached?.skills;
        saved.save();
    } else {
        detached.user_id = uuid.v4();
        detached.delete("_id");
        saved = await UserModel.create(detached);
        // saved = detached;
    }
    var finalUpdatedSkills = [];
    for (let skill of allSkills) {
        const keyWords = skill.keywords;
        const skillUsersCopy = skill.users;
        for (let userSkill of skills) {
            if (keyWords.includes(userSkill.toLowerCase())) {
                if (skillUsersCopy.length == 0) {
                    skill.users.push(saved);
                    skill.save();
                    finalUpdatedSkills.push(skill);
                }
                for (let user of skillUsersCopy) {
                    if (user["user_id"] != saved.user_id) {
                        skill.users.push(saved);
                        console.log(skill);
                        skill.save();
                        finalUpdatedSkills.push(skill);
                    }
                }
            }
        }
    }
    waiter = await addUsersToManySkills(finalUpdatedSkills);
    return saved;
}

const filterUser = async (req, res) => {
    let { key, value } = req.params;
    let users;
    if (key == "all" && value == "all") {
        users = await UserModel.find({});
    } else {
        value = value.split(", ")
        const valueRegex = new RegExp(value.join("|"), 'i');
        users = await UserModel.aggregate([
            {
                $match: {
                    [key]: { $regex: valueRegex },
                }
            }
        ]);
    }
    return res.status(200).json(users);
}

const saveManyUsers = async () => {

}

const deleteAllUsers = async (req, res) => {
    await UserModel.deleteMany({});
    const skills = await SkillModel.find({});
    for (let skill of skills) {
        skill.users = [];
        skill.save();
    }
    return res.status(200).json("Deleted...");
}

module.exports = {
    getAllUsers,
    findAUser,
    saveAUser,
    filterUser,
    deleteAllUsers,
}
