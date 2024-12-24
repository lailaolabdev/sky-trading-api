const jwt = require("jsonwebtoken");

const generateToken = (id, role, userName) => {
    const accessToken = jwt.sign(
        { id, role, userName },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_TOKEN_EXPIRES }
    );

    return { accessToken };
};

module.exports = { generateToken };