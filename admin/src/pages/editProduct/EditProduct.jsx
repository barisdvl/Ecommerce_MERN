import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProduct } from "../../redux/apiCalls";
import "./editProduct.css";

export default function EditProduct() {
  const [inputs, setInputs] = useState({});
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const editProduct = {
      ...inputs,
      productImg:
        "https://productimages.hepsiburada.net/s/229/375/110000210644455.jpg",
    };
    updateProduct(product._id, editProduct, dispatch).then(() => {
      navigate("/products");
    });
  };

  return (
    <div className="editProduct">
      <h1 className="editProductTitle">Edit Product</h1>
      <form id="editForm" className="editProductForm" onSubmit={handleSubmit}>
        <div className="editProductTop">
          <div className="editProductTopLeft">
            <div className="editProductItem">
              <label>Product Name</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                defaultValue={product.title}
                onChange={handleChange}
              />
            </div>

            <div className="editProductItem">
              <label>Category</label>
              <input
                type="text"
                name="category"
                defaultValue={product.categories}
                onChange={handleChange}
              />
            </div>
            <div className="editProductItem">
              <label>Size</label>
              <input
                type="text"
                name="size"
                defaultValue={product.size}
                onChange={handleChange}
              />
            </div>
            <div className="editProductItem">
              <label>Color</label>
              <input
                type="text"
                name="color"
                defaultValue={product.color}
                onChange={handleChange}
              />
            </div>
            <div className="editProductItem">
              <label>Price</label>
              <input
                type="text"
                name="price"
                defaultValue={product.price}
                onChange={handleChange}
              />
            </div>
            <div className="editProductItem">
              <label>In Stock</label>
              <select name="inStock" onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          <div className="editProductTopRight">
            <div className="editImgProductItem">
              <label>Image</label>

              <input type="file" name="img" accept="image/*" />
              <img
                id="output"
                src={product.productImg}
                alt=""
                className="editProductImg"
                //onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="editProductBottom">
          <div className="editProductTextArea">
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              defaultValue={product.description}
              rows={8}
              cols={30}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="editProductSubmit">
            <input
              type="submit"
              defaultValue="Update"
              className="editProductSumbitBtn"
              disabled
            />
          </div>
        </div>
      </form>
    </div>
  );
}
