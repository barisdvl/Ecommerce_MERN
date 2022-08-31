import { Link } from "react-router-dom";
import "./categories.css";
import { categories } from "../../data";

export default function Categories() {
  return (
    <div className="categories">
      <div className="categories-container">
        {categories.map((item) => (
          <div className="categories-items" key={item.id}>
            <Link to={`/products/${item.category}`}>
              <img src={item.img} alt="category-img" className="categories-image" />
              <div className="categories-detail">
                <h1 className="categories-title">{item.title}</h1>
                <button className="categories-button">SHOP NOW</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
