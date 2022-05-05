const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController");
const router = require("express").Router();

// Get watch list
router.get("/watchlist", middlewareController.verifyToken, userController.getWatchList);
router.get("/favoritelist", middlewareController.verifyToken, userController.getFavoriteList);
module.exports = router;
