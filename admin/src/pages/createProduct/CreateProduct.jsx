import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import "./createProduct.css";

export default function CreateProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        //Handle unsuccessful uploads
      },
      () => {
        //Handle successfel uploads on complete
        //For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, productImg: downloadURL };
          addProduct(product, dispatch).then(() => {
            navigate("/products");
          });
        });
      }
    );
  };

  return (
    <div className="createProduct">
      <h1 className="createProductTitle">Create Product</h1>
      <form
        id="createForm"
        className="createProductForm"
        onSubmit={handleClick}
      >
        <div className="createProductTop">
          <div className="createProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="createProductItem">
            <label>Categories</label>
            <input
              type="text"
              name="categories"
              placeholder="Categories"
              onChange={handleChange}
            />
          </div>
          <div className="createProductItem">
            <label>Size</label>
            <input
              type="text"
              name="size"
              placeholder="Size"
              onChange={handleChange}
            />
          </div>
          <div className="createProductItem">
            <label>Color</label>
            <input
              type="text"
              name="color"
              placeholder="Color"
              onChange={handleChange}
            />
          </div>
          <div className="createProductItem">
            <label>Price</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              onChange={handleChange}
            />
          </div>
          <div className="createProductItem">
            <label>In Stock</label>
            <select name="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="createProductItem">
            <label>Image</label>
            <input
              type="file"
              name="img"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>
        <div className="createProductBottom">
          <div className="createProductTextArea">
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              rows={8}
              cols={30}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="createProductSubmit">
            <input
              type="submit"
              defaultValue="Update"
              className="createProductSumbitBtn"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
