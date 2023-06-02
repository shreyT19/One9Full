import "./Home.scss";
import Banner from "./Banner/Banner";
import { useEffect, useContext } from "react";
import Category from "./Category/Category.jsx";
import Products from "../Products/Products";
// import SingleProduct from "../SingleProduct/SingleProduct";

import {fetchDataFromAPI} from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = async () => {
    fetchDataFromAPI("/api/categories?populate=*").then((res) => {
      setCategories(res);
      // console.log(res);
      // console.log(categories);
    });
  };

 
  const getProducts = ()=>{
    fetchDataFromAPI('/api/products?populate=*').then((res)=>{
      
      setProducts(res);
      // console.log(res);
      // console.log(products);

    })
  }



  return (

    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
