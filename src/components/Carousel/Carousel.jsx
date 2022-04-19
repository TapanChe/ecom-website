import React from "react";
import "./Carousel.module.scss";
import PropTypes from "prop-types";
// import { rockImages } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

const Carousel = (props) => {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                className="carousel-slider">
                {props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="Product Images" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
};

export default Carousel;
