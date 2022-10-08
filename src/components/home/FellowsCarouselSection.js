import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import FellowCard from "../FellowCard";

const FellowsCarouselSection = () => {
    return (
        <div className="my-16">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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