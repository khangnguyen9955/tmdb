const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController");
const router = require("express").Router();

// Get watch list
router.get("/", middlewareController.verifyToken, userController.getNewList);
module.exports = router;
