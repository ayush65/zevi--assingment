/** @format */

import React, { useState } from "react";
import { useProduct } from "../../Context/Product-context";
import "./productStyle/Products.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";

const Products = () => {
  const { productState, productDispatch } = useProduct();
  const [buttonText, setButtonText] = useState(<AiOutlineHeart />);

  return (
    <div>
      <img
        src='https://uploads-ssl.webflow.com/622778f0460ef2a7b46117c1/62277b0ea97763788d756b0b_ZEVI-GG-LogoDesogn%20-Option-2-Black-p-500.png'
        alt=''
        className='logo-img'
      />
      <div className=' product-search'>
        <input
          type='text'
          placeholder='Search'
          className='input-handler'
          onChange={(e) => {
            productDispatch({
              type: "FETCH_SEARCH_NAME",
              payload: { search: e.target.value, data: productState.data },
            });
          }}
        />
      </div>

      <div className='card-container'>
        {productState.data.map((item: any) => {
          return (
            <div key={item.id} className='card'>
              <button
                type='submit'
                className='heart-button'
                onClick={() => {
                  setButtonText(<AiFillHeart className='heart-icon' />);

                  setTimeout(() => {
                    setButtonText(<AiOutlineHeart />);
                  }, 2000);
                }}>
                {buttonText}
              </button>
              <img src={item.image} alt='' className='card-image' />
              <button className='product-button'>View Product</button>

              <p>{item.name}</p>
              <p className='product-content'> Rs {item.price}</p>
              <p className='product-content'>
                {" "}
                {item.ratings} <AiFillStar /> (210)
              </p>
            </div>
          );
        })}
      </div>

      <Sidebar />
    </div>
  );
};

export default Products;
