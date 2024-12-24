const userModel = require("../../models/userModel");
const { generateToken } = require("../../utils/generateTokens");
const bcrypt = require('bcrypt');


const loginService = async (req) => {

    const user = await userModel
        .findOne({
            $or: [
                {email: req.body.email_userName},
                {userName: req.body.email_userName}
            ]
        })
        .exec();
    if (!user) {
        return {message: "INVALID_USERNAME_OR_EMAIL", data: null}
    }
    const checkPassword = await bcrypt.compare(req.body.password, user.password);
    if (!checkPassword) {
        return {message: "INVALID_PASSWORD", data: null};
    }
    const { accessToken } = generateToken(
        user._id,
        user.role,
        user.userName
    );
    return {
        message: "LOGIN_SUCCESSFUL",
        data: accessToken
    };
};

module.exports = { loginService };
