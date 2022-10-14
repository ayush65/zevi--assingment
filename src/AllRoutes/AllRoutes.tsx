/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Products from "../pages/Products/Products";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/' element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
