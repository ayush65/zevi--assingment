/** @format */

import React, { useState } from "react";
import { useProduct } from "../../Context/Product-context";
import "./productStyle/Products.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";

const Products = () => {
  const { productState, productDispatch } = useProduct();
  const [buttonText, setButtonText] = useState(<AiOutlineHeart />);
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <img
        src='https://uploads-ssl.webflow.com/622778f0460ef2a7b46117c1/62277b0ea97763788d756b0b_ZEVI-GG-LogoDesogn%20-Option-2-Black-p-500.png'
        alt='img'
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
            <div
              key={item.id}
              className='card'
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}>
              <button
                type='submit'
                className='heart-button'
                onClick={() => {
                  setButtonText(<AiFillHeart color='red' />);

                  setTimeout(() => {
                    setButtonText(<AiOutlineHeart />);
                  }, 3000);
                }}>
                {buttonText}
              </button>
              <img src={item.image} alt='item-img' className='card-image' />
              {isShown && (
                <button className='product-button'>View Product</button>
              )}

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
