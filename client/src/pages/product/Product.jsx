import "./product.css";
import Navbar from "../../components/navbar/Navbar";
import { Add, Remove } from "@mui/icons-material";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

export default function Product() {
  return (
    <div className="product">
      <div className="product-container">
        <Navbar />
        <div className="product-wrapper">
          <div className="product-imageContainer">
            <img
              src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
              alt=""
              className="product-image"
            />
          </div>
          <div className="product-detailContainer">
            <h1 className="product-detailTitle">White T-Shirt</h1>
            <p className="product-detailDescription">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
            <span className="product-detailPrice">99.99 TL</span>
            <div className="product-filterContainer">
              <div className="product-filter">
                <span className="product-filterTitle">Color</span>
                <div
                  className="product-filterColor"
                  style={{ backgroundColor: "red" }}
                ></div>
                <div
                  className="product-filterColor"
                  style={{ backgroundColor: "white" }}
                />
                <div
                  className="product-filterColor"
                  style={{ backgroundColor: "blue" }}
                />
              </div>
              <div className="product-filter">
                <span className="product-filterTitle">Size</span>
                <select name="" id="" className="product-filterSize">
                  <option value="XS" className="product-filterSizeOption">
                    XS
                  </option>
                  <option value="S" className="product-filterSizeOption">
                    S
                  </option>
                  <option value="M" className="product-filterSizeOption">
                    M
                  </option>
                </select>
              </div>
            </div>
            <div className="product-addContainer">
              <div className="product-amountContainer">
                <Remove className="product-amountButton" />
                <span className="product-amount">1</span>
                <Add className="product-amountButton" />
              </div>
              <button className="product-addCartButton">Add to Cart</button>
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
