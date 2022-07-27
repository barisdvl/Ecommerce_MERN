import "./cart.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";

export default function Cart() {
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
                <div className="cart-product">
                  <div className="cart-productDetail">
                    <img
                      src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
                      alt=""
                      className="cart-productImage"
                    />
                    <div className="cart-productSubDetails">
                      <span className="cart-productName">
                        Product: Red T-Shirt
                      </span>
                      <span className="cart-productId">ID: 21</span>
                      <div
                        className="cart-productColor"
                        style={{ backgroundColor: "red" }}
                      ></div>
                      <span className="cart-productSize">Size: M</span>
                    </div>
                    <div className="cart-productPriceDetail">
                      <div className="cart-productAmountContainer">
                        <Add className="cart-productAmountButton"/>
                        <div className="cart-productAmount">1</div>
                        <Remove className="cart-productAmountButton"/>
                      </div>
                      <div className="cart-productPrice"> 99.99 TL</div>
                    </div>
                  </div>
                </div>
                <hr className="cart-hr" />
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
