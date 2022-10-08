import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import FellowCard from "../FellowCard";


const FellowsCarouselSection = () => {
    return (
        <div className="my-16">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
            >
                <SwiperSlide><FellowCard/></SwiperSlide>
                <SwiperSlide><FellowCard/></SwiperSlide>
                <SwiperSlide><FellowCard/></SwiperSlide>
                <SwiperSlide><FellowCard/></SwiperSlide>
            </Swiper>
        </div>

    );
};

export default FellowsCarouselSection;