import "./cart.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/reducers/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDeleteProduct = (_id, quantity, price) => {
    dispatch(deleteProduct({ _id, quantity, price }));
  };
  console.log(cart);

  return (
    <div className="cart">
      <Navbar />
      <div className="cart-container">
        <div className="cart-wrapper">
          <div className="cart-itemsContainer">
            <h1 className="cart-title">Your Shopping Cart</h1>
            <div className="cart-top">
              <button
                className="cart-topButton"
                style={{ backgroundColor: "transparent" }}
              >
                CONTINUE SHOPPING
              </button>
              <div className="cart-topTexts">
                <span className="cart-topText">Shopping Cart (2)</span>
                <span className="cart-topText">Your Whishlist (0)</span>
              </div>
              <button
                className="cart-topButton"
                style={{
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                CHECKOUT NOW
              </button>
            </div>
            <div className="cart-bottom">
              <div className="cart-detail">
                {cart.products.map((product) => (
                  <div key={product._id}>
                    <div className="cart-product">
                      <div className="cart-productDetail">
                        <img
                          src={product.productImg}
                          alt=""
                          className="cart-productImage"
                        />
                        <div className="cart-productSubDetails">
                          <span className="cart-productName">
                            Product: {product.title}
                          </span>

                          <div className="cart-productColor">
                            {product.color}
                          </div>
                          <span className="cart-productSize">
                            Size: {product.size}
                          </span>
                        </div>
                        <div className="cart-productPriceDetail">
                          <div className="cart-productAmountContainer">
                            <Add className="cart-productAmountButton" />
                            <div className="cart-productAmount">
                              {product.quantity}
                            </div>
                            <Remove className="cart-productAmountButton" />
                          </div>
                          <div className="cart-productPrice">
                            {" "}
                            {product.price}
                          </div>
                        </div>
                        <div
                          className="cart-productDelete"
                          onClick={handleDeleteProduct({
                            _id: product._id,
                            quantity: product.quantity,
                            price: product.price,
                          })}
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                    <hr className="cart-hr" />
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <h1 className="cart-summaryTitle">ORDER SUMMARY</h1>
                <div className="cart-summaryItem">
                  <span className="cart-summaryItemText">Subtotal</span>
                  <span className="cart-summaryItemPrice">99.99 TL</span>
                </div>
                <div className="cart-summaryItem">
                  <span className="cart-summaryItemText">
                    Estimated Shipping
                  </span>
                  <span className="cart-summaryItemPrice">17.99 TL</span>
                </div>
                <div className="cart-summaryItem">
                  <span className="cart-summaryItemText">
                    Shipping Discount
                  </span>
                  <span className="cart-summaryItemPrice">-17.99 TL</span>
                </div>
                <div className="cart-summaryItem total">
                  <span className="cart-summaryItemText">Total</span>
                  <span className="cart-summaryItemPrice">99.99 TL</span>
                </div>
                <button className="cart-summaryButton">CHECKOUT NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
