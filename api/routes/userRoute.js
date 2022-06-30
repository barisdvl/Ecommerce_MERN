const router = require("express").Router();

const userController = require("../controllers/userController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

router
  .route("/:userId")
  .put(verifyTokenAndAuthorization, userController.updateUser)
  .delete(verifyTokenAndAuthorization, userController.deleteUser);

router.route("/find/:userId").get(verifyTokenAndAdmin, userController.getUser);

router.route("/").get(verifyTokenAndAdmin, userController.getAllUsers);

module.exports = router;
