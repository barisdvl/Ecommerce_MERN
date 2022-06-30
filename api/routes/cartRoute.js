const router = require("express").Router();

const cartController = require("../controllers/cartController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

router.route("/").post(verifyToken, cartController.createCart);

router
  .route("/:userId/:id")
  .put(verifyTokenAndAuthorization, cartController.updateCart)
  .delete(verifyTokenAndAuthorization, cartController.deleteCart);

router
  .route("/find/:userId")
  .get(verifyTokenAndAuthorization, cartController.getUserCart);

router.route("/").get(verifyTokenAndAdmin, cartController.getAllCarts);

module.exports = router;
