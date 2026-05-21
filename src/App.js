import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* First Page */}
        <Route path="/" element={<Register />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Home Page */}
        <Route path="/home" element={<Home />} />

        {/* Orders Page */}
        <Route path="/orders" element={<Orders />} />

        {/* Checkout Page */}
        <Route path="/checkout" element={<Checkout />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;