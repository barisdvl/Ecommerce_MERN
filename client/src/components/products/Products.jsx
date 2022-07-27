import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./products.css";
import { popularProducts } from "../../data";

export default function Products() {
  return (
    <div className="products">
      {popularProducts.map((item) => (
        <div className="products-container">
          <div className="products-circle"></div>
          <img src={item.img} alt="product-img" className="products-image" />
          <div className="products-detail">
            <div className="products-icon">
              <ShoppingCartOutlined />
            </div>
            <div className="products-icon">
              <Link to={`/product/${item.id}`}>
                <SearchOutlined />
              </Link>
            </div>
            <div className="products-icon">
              <FavoriteBorderOutlined />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
