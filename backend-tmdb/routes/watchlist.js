const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController");
const router = require("express").Router();

// Get watch list
router.get("/", middlewareController.verifyToken, userController.getWatchList);
router.post("/add", middlewareController.verifyToken, userController.addWatchList)
router.post("/remove", middlewareController.verifyToken, userController.removeWatchList)

module.exports = router;

