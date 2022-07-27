import Navbar from "../../components/navbar/Navbar";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
