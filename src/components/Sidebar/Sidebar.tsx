/** @format */

import React from "react";
import { useProduct } from "../../Context/Product-context";
import "./sidebarStyles/Sidebar.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Sidebar = () => {
  const { productState, productDispatch } = useProduct();

  return (
    <div>
      <div className='sidebar-container'>
        <div className='sidebar-content'>
          <h2>Search Results</h2>
          <h3>Brand</h3>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                productDispatch({
                  type: "FETCH_GENDER",
                  payload: { gender: "Men", data: productState.data },
                });
              }}
            />
            <label>Mango</label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                productDispatch({
                  type: "FETCH_GENDER",
                  payload: { gender: "Women", data: productState.data },
                });
              }}
            />
            <label>H&M</label>
          </div>
        </div>

        <div className='sidebar-content'>
          <h3>Price Range</h3>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                productDispatch({
                  type: "FETCH_PRICE",
                  payload: { price: 500, data: productState.data, value: 500 },
                });
              }}
            />
            <label>Under 500</label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                productDispatch({
                  type: "FETCH_PRICE",
                  payload: {
                    price: 1000,
                    data: productState.data,
                    value: 3000,
                  },
                });
              }}
            />
            <label>Under 3000</label>
          </div>
        </div>

        <div className='sidebar-content'>
          <h3>Ratings</h3>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                productDispatch({
                  type: "FETCH_RATING",
                  payload: {
                    ratings: 4,
                    data: productState.data,
                  },
                });
              }}
            />
            <label>
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                productDispatch({
                  type: "FETCH_RATING",
                  payload: {
                    ratings: 3,
                    data: productState.data,
                  },
                });
              }}
            />
            <label>
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />{" "}
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                productDispatch({
                  type: "FETCH_RATING",
                  payload: {
                    ratings: 2,
                    data: productState.data,
                  },
                });
              }}
            />
            <label>
              <AiFillStar /> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar />
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                productDispatch({
                  type: "FETCH_RATING",
                  payload: {
                    ratings: 1,
                    data: productState.data,
                  },
                });
              }}
            />
            <label>
              <AiFillStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
              <AiOutlineStar />{" "}
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                productDispatch({
                  type: "FETCH_RATING",
                  payload: {
                    ratings: 0,
                    data: productState.data,
                  },
                });
              }}
            />
            <label>
              <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
              <AiOutlineStar />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
