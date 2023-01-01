const uuid = require("uuid");
const UserModel = require("../models/User-Model");
const SkillModel = require("../models/Skill-Model");


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
    var saved;
    let detached = new UserModel(user);
    let exists = await UserModel.count({ email: detached.email });
    exists += await UserModel.count({ mobileNumber: detached.mobileNumber });
    exists += await UserModel.count({ user_id: detached.user_id });
    if (exists > 0) {
        saved = await UserModel.updateOne(detached);
        saved = detached;
    } else {
        detached.user_id = uuid.v4();
        saved = await UserModel.create(detached);
    }
    return saved;
}

module.exports = {
    getAllUsers,
    findAUser,
    saveAUser,
}
