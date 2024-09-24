import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ChowdhuryState, TProduct, Brand, Category } from "../../../types/global.type"; // Adjust import paths as necessary
import Swal from "sweetalert2";


// API Endpoints
const CREATE_PRODUCT_URL = "http://localhost:5000/products/create-product";
const GET_ALL_PRODUCTS_URL = "http://localhost:5000/products/all";


const initialState: ChowdhuryState = {
  userInfo: [],
  products: [],
  checkedBrands: [],
  checkedCategorys: [],
  loading: false,
  error: null,
};

export const chowdhurySlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item) {

        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      // Dispatch a success toast
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product added to Cart",
        showConfirmButton: false,
        timer: 1500
      });
    },
    increaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
        // Dispatch a success toast
      }
    },
    drecreaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
        // Dispatch a success toast
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((item) => item._id !== action.payload);
      // Dispatch a success toast
    },
    resetCart: (state) => {
      state.products = [];
      // Dispatch a success toast
    },
    toggleBrand: (state, action: PayloadAction<Brand>) => {
      const brand = action.payload;
      const isBrandChecked = state.checkedBrands.some((b) => b._id === brand._id);

      if (isBrandChecked) {
        state.checkedBrands = state.checkedBrands.filter((b) => b._id !== brand._id);
      } else {
        state.checkedBrands.push(brand);
      }
    },
    toggleCategory: (state, action: PayloadAction<Category>) => {
      const category = action.payload;
      const isCategoryChecked = state.checkedCategorys.some((b) => b._id === category._id);

      if (isCategoryChecked) {
        state.checkedCategorys = state.checkedCategorys.filter((b) => b._id !== category._id);
      } else {
        state.checkedCategorys.push(category);
      }
    },
  },
});

export const {
  setLoading,
  setError,
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  toggleBrand,
  toggleCategory,
} = chowdhurySlice.actions;

export default chowdhurySlice.reducer;
