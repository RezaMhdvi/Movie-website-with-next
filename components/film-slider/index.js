import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./film-slider.module.css"

const FilmSlider = () => {
    return (
        <div>
            <Swiper
            freeMode={true}
            slidesPerView={8}
            spaceBetween={20}
            dir="rtl"
            >
                <SwiperSlide>
                    <Link href={"/films/[slug]"} as={"films/film1"}>
                    <Card className={styles.card}>
                        <Card.Img src={"/assets/films/film1.jpg"} alt="image1" />
                    </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={"/films/[slug]"} as={"films/film2"}>
                    <Card className={styles.card}>
                        <Card.Img src={"/assets/films/film2.jpg"} alt="image1" />
                    </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={"/films/[slug]"} as={"films/film3"}>
                    <Card className={styles.card}>
                        <Card.Img src={"/assets/films/film3.jpg"} alt="image1" />
                    </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={"/films/[slug]"} as={"films/film4"}>
                    <Card className={styles.card}>
                        <Card.Img src={"/assets/films/film4.jpg"} alt="image1" />
                    </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={"/films/[slug]"} as={"films/film5"}>
                    <Card className={styles.card}>
                        <Card.Img src={"/assets/films/film5.jpg"} alt="image1" />
                    </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={"/films/[slug]"} as={"films/film6"}>
                    <Card className={styles.card}>
                        <Card.Img src={"/assets/films/film6.jpg"} alt="image1" />
                    </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={"/films/[slug]"} as={"films/film3"}>
                    <Card className={styles.card}>
                        <Card.Img src={"/assets/films/film3.jpg"} alt="image1" />
                    </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={"/films/[slug]"} as={"films/film2"}>
                    <Card className={styles.card}>
                        <Card.Img src={"/assets/films/film2.jpg"} alt="image1" />
                    </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={"/films/[slug]"} as={"films/film1"}>
                    <Card className={styles.card}>
                        <Card.Img src={"/assets/films/film1.jpg"} alt="image1" />
                    </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={"/films/[slug]"} as={"films/film2"}>
                    <Card className={styles.card}>
                        <Card.Img src={"/assets/films/film2.jpg"} alt="image1" />
                    </Card>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default FilmSlider;
