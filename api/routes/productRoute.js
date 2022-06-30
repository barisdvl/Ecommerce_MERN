const router = require("express").Router();

const productController = require("../controllers/productController");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

router.route("/").post(verifyTokenAndAdmin, productController.createProduct);
router
  .route("/:id")
  .put(verifyTokenAndAdmin, productController.updateProduct)
  .delete(verifyTokenAndAdmin, productController.deleteProduct);

router.route("/find/:id").get(productController.getProduct);

router.route("/").get(productController.getAllProduct);

module.exports = router;
