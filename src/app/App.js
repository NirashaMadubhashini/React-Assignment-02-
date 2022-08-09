import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import React from "react";
import LogingSection from "../pages/Loging";
import DashBoard from "../pages/Main";
import User from "../pages/User";
import Product from "../pages/Product";
import Cart from "../pages/cart";
import SignUp from "../pages/Loging/signUp";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LogingSection/>}/>
          <Route exact path='signUp' element={<SignUp/>}/>
          <Route exact path='dash' element={<DashBoard/>}/>
          <Route exact path='users' element={<User/>}/>
          <Route exact path='product' element={<Product/>}/>
          <Route exact path='cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;