import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, ManageSearch, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import "./productList.css";
import { userRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/apiCalls";

export default function ProductList() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [delItem, setDelItem] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
    getProducts(dispatch);
  }, [dispatch]);

  const fetchProducts = async () => {
    let getProducts = [];
    let idCounter = 0;
    const res = await userRequest.get("/products");

    //Fixed => Uncaught Error: MUI: The data grid component requires all rows to have a unique id property.
    res.data.map((product) => {
      idCounter += 1;
      return getProducts.push({
        id: idCounter,
        _id: product._id,
        title: product.title,
        description: product.description,
        categories: product.categories,
        size: product.size,
        color: product.color,
        price: product.price,
        inStock: product.inStock,
      });
    });
    setProducts(getProducts);
  };

  const handleClickOpen = (itemId) => {
    setOpen(true);
    setDelItem(itemId);
  };

  const handleClose = () => {
    setOpen(false);
    setDelItem("");
  };

  const handleDelete = async () => {
    await userRequest.delete("/products/" + delItem).then(() => {
      fetchProducts();
    });
    setOpen(false);
    setDelItem("");
  };

  const alertDialog = (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you wish to delete this product?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );

  const columns = [
    { field: "title", headerName: "Title", width: 120 },
    {
      field: "categories",
      headerName: "Categories",
      width: 250,
    },
    { field: "size", headerName: "Size", width: 170 },

    {
      field: "price",
      headerName: "Price",
      width: 100,
    },

    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="actionContainer">
            <Link to={"/product/" + params.row._id}>
              <ManageSearch className="productListEditBtn" />
            </Link>

            <DeleteOutline
              className="productListDeleteBtn"
              onClick={() => handleClickOpen(params.row._id)} //handleDelete(params.row._id)
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Products</h1>

        <FormControl className="searchBox" fullWidth>
          <div className="searchBoxContainer">
            <TextField
              id="input-with-sx"
              label="Search Something..."
              variant="standard"
            />
            <Search />
          </div>
        </FormControl>

        <Link to="/createProduct">
          <button className="productAddButton">Create Product</button>
        </Link>
      </div>
      <div className="productListTable">
        {alertDialog}
        <DataGrid
          rows={products}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
