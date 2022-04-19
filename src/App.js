import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home/Home";
import Cart from "./container/Cart/Cart";
import { rockImages } from "./assets";
import Carousel from "./components/Carousel/Carousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./App.module.scss";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    {/* <Route path="/:id" index element={<Cart />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
