import "./product.css";
import Navbar from "../../components/navbar/Navbar";
import { Add, Remove } from "@mui/icons-material";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addProduct } from "../../redux/reducers/cartSlice";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );


  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };


  const handleAddCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
    console.log(product)
    console.log(quantity)
    console.log(color)
    console.log(size)
  };

  return (
    <div className="product">
      <div className="product-container">
        <Navbar />
        <div className="product-wrapper" >
          <div className="product-imageContainer">
            <img src={product.productImg} alt="" className="product-image" />
          </div>
          <div className="product-detailContainer">
            <h1 className="product-detailTitle">{product.title}</h1>
            <p className="product-detailDescription">{product.description}</p>
            <span className="product-detailPrice">{product.price}</span>
            <div className="product-filterContainer">
              <div className="product-filter">
                <span className="product-filterTitle">Color</span>
                <select
                  name=""
                  id=""
                  className="product-filterSize"
                  onChange={(e) => setColor(e.target.value)}
                >
                  {product.color[0].split(",").map((color) => (
                    <option value={color} key={color} className="product-filterSizeOption">
                      {color}
                    </option>
                  ))}
                </select>
              </div>
              <div className="product-filter">
                <span className="product-filterTitle">Size</span>
                <select
                  name=""
                  id=""
                  className="product-filterSize"
                  onChange={(e) => setSize(e.target.value)}
                >
                  {product.size[0].split(",").map((size) => (
                    <option value={size} key={size} className="product-filterSizeOption">
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="product-addContainer">
              <div className="product-amountContainer">
                <Remove
                  className="product-amountButton"
                  onClick={() => handleQuantity("decrease")}
                />
                <span className="product-amount">{quantity}</span>
                <Add
                  className="product-amountButton"
                  onClick={() => handleQuantity("increase")}
                />
              </div>
              <button className="product-addCartButton" onClick={handleAddCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
