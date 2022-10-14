/** @format */

import React, { useState } from "react";
import { useQuiz } from "../../Context/Quiz-context";
import "./modalStyles/Modal.css";

const ModalComponent = () => {
  //const { productState, productDispatch } = useQuiz();

  return (
    <div>
      {/* {productState.data.map((item: any) => {
        return (
          <div key={item.id} className='card'>
            {item.name}
          </div>
        );
      })} */}
      <div className='modal-cotent-container'>
        <div>
          <h3>Latest Trend</h3>
          <div className='search-list-container'>
            <div>
              <img
                src='https://media.istockphoto.com/photos/businessman-roll-up-his-sleeves-picture-id541311214?k=20&m=541311214&s=612x612&w=0&h=PVodeMEhgpQuPwbo0UTx-OoVryrsIbd7Ltru6TuOZw0='
                alt=''
                className='search-img'
              />
              <p>shirt with rolled sleeves </p>
            </div>
            <div>
              <img
                src='https://media.istockphoto.com/photos/businessman-roll-up-his-sleeves-picture-id541311214?k=20&m=541311214&s=612x612&w=0&h=PVodeMEhgpQuPwbo0UTx-OoVryrsIbd7Ltru6TuOZw0='
                alt=''
                className='search-img'
              />
              <p>shirt with rolled sleeves </p>
            </div>
            <div>
              <img
                src='https://media.istockphoto.com/photos/businessman-roll-up-his-sleeves-picture-id541311214?k=20&m=541311214&s=612x612&w=0&h=PVodeMEhgpQuPwbo0UTx-OoVryrsIbd7Ltru6TuOZw0='
                alt=''
                className='search-img'
              />
              <p>shirt with rolled sleeves </p>
            </div>
            <div>
              <img
                src='https://media.istockphoto.com/photos/businessman-roll-up-his-sleeves-picture-id541311214?k=20&m=541311214&s=612x612&w=0&h=PVodeMEhgpQuPwbo0UTx-OoVryrsIbd7Ltru6TuOZw0='
                alt=''
                className='search-img'
              />
              <p>shirt with rolled sleeves </p>
            </div>
            <div>
              <img
                src='https://media.istockphoto.com/photos/businessman-roll-up-his-sleeves-picture-id541311214?k=20&m=541311214&s=612x612&w=0&h=PVodeMEhgpQuPwbo0UTx-OoVryrsIbd7Ltru6TuOZw0='
                alt=''
                className='search-img'
              />
              <p>shirt with rolled sleeves </p>
            </div>
          </div>
        </div>
        <div>
          <h3>Popular suggestion</h3>
          <div>
            <p>stripped shirt dress</p>
            <p>stripped shirt dress</p>
            <p>stripped shirt dress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
