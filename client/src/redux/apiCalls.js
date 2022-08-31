import { publicRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure } from "./reducers/authSlice";
import {
  getAllProductFailure,
  getAllProductStart,
  getAllProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./reducers/productSlice";

//LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

//GET ALL PRODUCTS
export const getAllProducts = async (dispatch) => {
  dispatch(getAllProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getAllProductSuccess(res.data));
  } catch (error) {
    dispatch(getAllProductFailure());
  }
};

//GET PRODUCT
export const getProduct = async (dispatch, id) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get(`/products/find/${id}`);
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};
