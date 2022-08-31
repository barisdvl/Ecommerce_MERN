import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/apiCalls";

export default function Products() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="products">
      {products.map(
        (item, i) =>
          i < 8 && (
            <div className="products-container" key={item._id}>
              <div className="products-circle"></div>
              <img
                src={item.productImg}
                alt="product-img"
                className="products-image"
              />
              <div className="products-detail">
                <div className="products-icon">
                  <ShoppingCartOutlined />
                </div>
                <div className="products-icon">
                  <Link to={`/product/${item._id}`}>
                    <SearchOutlined />
                  </Link>
                </div>
                <div className="products-icon">
                  <FavoriteBorderOutlined />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
