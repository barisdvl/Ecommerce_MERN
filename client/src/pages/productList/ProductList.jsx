import "./productList.css";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

export default function ProductList() {
  return (
    <div className="productList">
      <div className="productList-container">
        <Navbar />
        <h1 className="productList-title">Dresses</h1>
        <div className="productList-filterContainer">
          <div className="productList-filter">
            <span className="productList-filterText">Filter Products: </span>
            <select name="" id="" className="produtList-filterSelect">
              <option
                value="Color"
                className="productList-selectOption"
                disabled
                selected
              >
                Color
              </option>
              <option value="White" className="productList-selectOption">
                White
              </option>
              <option value="White" className="productList-selectOption">
                White
              </option>
              <option value="Red" className="productList-selectOption">
                Red
              </option>
              <option value="Blue" className="productList-selectOption">
                Blue
              </option>
              <option value="Black" className="productList-selectOption">
                Black
              </option>
            </select>
            <select name="" id="" className="produtList-filterSelect">
              <option
                value="Size"
                className="productList-selectOption"
                disabled
                selected
              >
                Size
              </option>
              <option value="XS" className="productList-selectOption">
                XS
              </option>
              <option value="S" className="productList-selectOption">
                S
              </option>
              <option value="M" className="productList-selectOption">
                M
              </option>
              <option value="L" className="productList-selectOption">
                L
              </option>
              <option value="XL" className="productList-selectOption">
                XL
              </option>
            </select>
          </div>
          <div className="productList-filter">
          <span className="productList-filterText">Sort Products: </span>
          <select name="" id="" className="produtList-filterSelect">
              <option
                value="Newest"
                className="productList-selectOption"                
                selected
              >
                Newest
              </option>
              <option value="Price (asc)" className="productList-selectOption">
                Price (asc)
              </option>
              <option value="Price (desc)" className="productList-selectOption">
                Price (desc)
              </option>
              
            </select>
          </div>
        </div>
        <Products />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
