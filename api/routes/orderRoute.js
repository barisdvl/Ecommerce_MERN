const router = require("express").Router();

const orderController = require("../controllers/orderController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");

router.route("/").post(verifyToken, orderController.createOrder);
router.route("/:id").put(verifyTokenAndAdmin, orderController.updateOrder);
router.route("/:id").delete(verifyTokenAndAdmin, orderController.deleteOrder);
router.route("/find/:userId").get(verifyTokenAndAuthorization, orderController.getUserOrders)
router.route("/").get(verifyTokenAndAdmin, orderController.getAllOrders)

module.exports = router;
