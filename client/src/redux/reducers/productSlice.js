import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL PRODUCT
    getAllProductStart: (state) => {
      state.isFetching = true;
    },
    getAllProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getAllProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //GET PRODUCT
    getProductStart: (state) => {
      state.isFetching = true;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getAllProductStart,
  getAllProductSuccess,
  getAllProductFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
