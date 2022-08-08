import { Link, useLocation } from "react-router-dom";

import "./product.css";
import { useSelector } from "react-redux";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>

        <Link to={"/product/edit/" + product._id}>
          <button className="productEditButton">Edit Product</button>
        </Link>
      </div>
      <div className="productDetailContainer">
        <div className="productDetail">
          <img src={product.productImg} alt="" className="productInfoImg" />
          <div className="productDetailRight">
            <span className="productName">{product.title}</span>
            <br />
            <span className="productDescription">{product.description}</span>
          </div>
        </div>
        <div className="productBottom">
          <div className="productInfo">
            <div className="productInfoItem">
              <span className="productInfoKey">Category</span>
              <span className="productInfoValue">{product.categories}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price</span>
              <span className="productInfoValue">{product.price} TL</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Size</span>
              <span className="productInfoValue">{product.size}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Color</span>
              <span className="productInfoValue">{product.color}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Stock</span>
              <span className="productInfoValue">
                {product.inStock ? "Var" : "Yok"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
