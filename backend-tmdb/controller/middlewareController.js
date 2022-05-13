const jwt = require("jsonwebtoken");

const middlewareController = {
    //verify token
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        console.log(req.headers.token);

        if (token) {
            const accessToken = token.split(" ")[1];
            console.log("accessToken", accessToken);
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });
        }
        else {
            return res.status(401).json("You're not authenticated");
        }
    },
    // refresh token
};
module.exports = middlewareController;