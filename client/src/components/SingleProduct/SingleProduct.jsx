import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import { useParams } from "react-router-dom";

// import prod from "../../assets/products/earbuds-prod-1.webp";
import useFetch from "../../hooks/useFetch";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";
const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);

  //add items to cart
  const { handleAddToCart } = useContext(Context);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity === 1) return 1;
      return prevQuantity - 1;
    });
  };

  const { id } = useParams();
  // console.log(id);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  if (!data) return;

  const productData = data.data[0].attributes;
  // console.log(productData);

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                productData.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <div className="product-name">{productData.title}</div>
            <div className="price">&#8377;{productData.price}</div>
            <div className="prod-desc">{productData.description}</div>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={handleDecrement}>-</span>
                <span>{quantity}</span>
                <span onClick={handleIncrement}>+</span>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> {productData.categories.data[0].attributes.title}</span>
              </span>

              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaTwitter size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productID={id}
          categoryID={productData.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
