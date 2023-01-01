const express = require("express");
const userController = express.Router();
const { getAllUsers, findAUser } = require("../services/user-service");


userController.get("", getAllUsers);
userController.get("/:userId", async (req, res) => {
    const { userId } = req.params;
    const foundUser = await findAUser(userId);
    if(!foundUser) {
        console.log(`=====> USER WITH ID: ${userId} NOT FOUND... <=====`);
        return res.status(500).json({
            error: "Not_Found",
            message: "User Not found...",
        });
    }
    return res.status(200).json({
        message: "User Found",
        data: foundUser
    });
});

module.exports = userController;
