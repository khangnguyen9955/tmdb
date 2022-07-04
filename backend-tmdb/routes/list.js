const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController");
const router = require("express").Router();

// Get list
router.get("/", middlewareController.verifyToken, userController.getAllList);
router.post(
  "/create",
  middlewareController.verifyToken,
  userController.createNewList
);
router.post(
  "/remove",
  middlewareController.verifyToken,
  userController.removeList
);

router.post(
  "/add",
  middlewareController.verifyToken,
  userController.addMovieToList
);

module.exports = router;
