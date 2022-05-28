const authController = require("../controller/authController");
const middlewareController = require("../controller/middlewareController");

const router = require("express").Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post(
    "/logout",
    middlewareController.verifyToken,
    authController.logoutUser
);
router.get("/fetch", middlewareController.verifyToken, authController.fetchUser);
router.post("/refresh", authController.requestRefreshToken);

module.exports = router;
