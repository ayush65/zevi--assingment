/** @format */

import React, { useState } from "react";
import "../Homepage/homepageStyles/Homepage.css";
import { BsSearch } from "react-icons/bs";
import Modal from "../../components/Modal/Modal";
import { useProduct } from "../../Context/Product-context";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    console.log("clickHandler");
    setIsOpen(true);
  };

  const { productState, productDispatch } = useProduct();

  return (
    <div>
      <img
        src='https://uploads-ssl.webflow.com/622778f0460ef2a7b46117c1/62277b0ea97763788d756b0b_ZEVI-GG-LogoDesogn%20-Option-2-Black-p-500.png'
        alt='img'
        className='logo-img'
      />
      <div className='search-container' onClick={() => clickHandler()}>
        <input
          type='text'
          className='homepage-input'
          placeholder='Search'
          onChange={(e) => {
            productDispatch({
              type: "FETCH_SEARCH_NAME",
              payload: { search: e.target.value, data: productState.data },
            });
          }}
        />
        <BsSearch className='search-icon' />
      </div>

      <Modal open={isOpen} closeButton={() => setIsOpen(false)} />

      <img
        src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbmdpbmclMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        alt='img'
        className='homepage-img'
      />

      <Link className='button-9 ' to='/products'>
        See Products
      </Link>
    </div>
  );
};

export default Homepage;
