const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController");
const router = require("express").Router();

// Get list
router.get("/", middlewareController.verifyToken, userController.getAllList);
router.post(
  "/add",
  middlewareController.verifyToken,
  userController.addNewList
);
router.post(
  "/remove",
  middlewareController.verifyToken,
  userController.removeList
);
module.exports = router;
