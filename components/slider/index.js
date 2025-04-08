import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore , { Navigation , Pagination } from "swiper";
import styles from './slider.module.css'

SwiperCore.use([Navigation, Pagination])

const HeaderSlider = () => {
    return (
        <div>
            <Swiper
            className={styles.slider}
            navigation
            pagination={{clickable:true}}
            >
                <SwiperSlide><img className={styles.img_slider} src={"/assets/slider/slide1.jpg"}/><span className={styles.text_img_slider}>متن اسلاید شماره 1</span></SwiperSlide>
                <SwiperSlide><img className={styles.img_slider} src={"/assets/slider/slide2.jpg"}/><span className={styles.text_img_slider}>متن اسلاید شماره 2</span></SwiperSlide>
                <SwiperSlide><img className={styles.img_slider} src={"/assets/slider/slide3.jpg"}/><span className={styles.text_img_slider}>متن اسلاید شماره 3</span></SwiperSlide>
                <SwiperSlide><img className={styles.img_slider} src={"/assets/slider/slide4.jpg"}/><span className={styles.text_img_slider}>متن اسلاید شماره 4</span></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeaderSlider;
