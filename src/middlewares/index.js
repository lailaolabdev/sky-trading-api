const jwt = require("jsonwebtoken");

const checkAuthorization = (req, res, next) => {
    const token = req.headers["authorization"];
    if (token) {
        const accessToken = token.replace("Bearer ", "");
        try {
            const payloadData = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
        } catch (error) {
            res.status(401).json({ message: "TOKEN_EXPIRED"});
            return;
        }
    } else {
        res.status(401).json({ message: "UNAUTHORIZED"});
        return;
    }
    next();
};

const getUserDataOnToken = (req, res) => {
    try {
        if (req.headers.authorization) {
            const accessToken = req.headers.authorization.split(" ")[1];
            const { id, role, userName } = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
            return { id, role, userName }
        }
    } catch (error) {
        console.log("error: 6", error)
        if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ message: 'TOKEN_EXPIRED' });
        }
        return null;
    }
}

const checkAuthorizationAdmin = (req, res, next) => {
    const token = req.headers["authorization"];
    if (token) {
        const accessToken = token.replace("Bearer ", "");
        try {
            const payloadData = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
            
            if(payloadData.role !== "ADMIN"){
                res.status(401).json({message: "PERMISSION_DENIED"})
            }
        } catch (error) {
            res.status(401).json({ message: "TOKEN_EXPIRED"});
            return;
        }
    } else {
        res.status(401).json({ message: "UNAUTHORIZED"});
        return;
    }
    next();
};

module.exports = {checkAuthorization, getUserDataOnToken, checkAuthorizationAdmin};
