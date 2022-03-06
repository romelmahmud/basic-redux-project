import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  //   console.log(products.allProducts);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductList;
