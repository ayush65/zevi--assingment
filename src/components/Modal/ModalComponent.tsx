/** @format */

import "./modalStyles/Modal.css";

const ModalComponent = () => {
  return (
    <div>
      <div className='modal-cotent-container'>
        <div>
          <h3 className='search-list-container-content '>Latest Trend</h3>
          <div className='search-list-container'>
            <div className='search-list-container-content'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqN6v8TF2uZho5eNi4U4dZ1pN_N6T04mlutQ&usqp=CAU'
                alt='img'
                className='search-img'
              />
              <p>Shirt with Puffed sleeves </p>
            </div>
            <div className='search-list-container-content'>
              <img
                src='https://assets.ajio.com/medias/sys_master/root/20220520/scGE/6286b015aeb26921afad0b7b/-473Wx593H-464358684-blue-MODEL2.jpg'
                alt='img'
                className='search-img'
              />
              <p>Rolled sleeves </p>
            </div>
            <div className='search-list-container-content'>
              <img
                src='https://cdn.shopify.com/s/files/1/0569/0284/4581/products/Harvey_Formal_Wrinkle_Free_Shirt_In_Blue_Color_India_Slim_Fit-MSPM9745B2NA21FN-Image5.jpg?v=1635169560'
                alt='img'
                className='search-img'
              />
              <p>Full Shirt sleeves </p>
            </div>
            <div className='search-list-container-content'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJw0gvmx5dtr7u5_henAS9DHp8GExfF3ivQ&usqp=CAU'
                alt='img'
                className='search-img'
              />
              <p>shirt boom sleeves </p>
            </div>
            <div className='search-list-container-content'>
              <img
                src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19694402/2022/9/28/6e92d90f-630c-4150-80c9-9ca0b053e60f1664356097344-HIGHLANDER-Men-Blue-Slim-Fit-Casual-Shirt-6961664356096704-1.jpg'
                alt='img'
                className='search-img'
              />
              <p>Party Wear </p>
            </div>
          </div>
        </div>
        <div className='search-list-container-content '>
          <h3>Popular suggestion</h3>
          <div>
            <p>Stripped shirt dress</p>
            <p>Stalin Shirt</p>
            <p>Denim shirt </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
