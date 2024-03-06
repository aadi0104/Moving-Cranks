import React, { useEffect, useState } from "react";

import data from "./Data.json"

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CarModal from "../Modals/CarDetailsModals";

function PopularCarSlider(props) {

    const [slidenumber, setSlideNumber] = useState(window.innerWidth);

    const [showModal, setShowModal] = useState(false);

    const [tempData, setTempData] = useState([]);

    const getData = (name, image, category, price, description) => {
        let temp = [name, image, category, price, description];
        setTempData([temp]);

        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (window.innerWidth > 1000) {
            setSlideNumber(4);
        }
        else if (window.innerWidth > 768) {
            setSlideNumber(3);
        } else if (window.innerWidth > 500) {
            setSlideNumber(2);
        }
        else {
            setSlideNumber(1);
        }
    }, [slidenumber, window.innerWidth])

    return (
        <>
            <div>
                <Swiper
                    style={{ width: "100%" }}
                    slidesPerView={slidenumber}
                    navigation={true}
                    spaceBetween={30}
                    modules={[Navigation]}
                >
                    {data.map((car) => {
                        if (car.category === props.category) {
                            return (
                                <SwiperSlide>
                                    <div onClick={() => { getData(car.name, car.image, car.category, car.price, car.description);}}>
                                        <Card key={car.id} style={{margin: "10px auto",boxShadow: "1.5px 1px 5px black" }}>
                                            <CardImg src={car.image} alt={car.name} />
                                            <CardBody>
                                                <CardTitle style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{car.name}</CardTitle>
                                                <CardText style={{ fontWeight: "bold", fontSize: "0.9rem" }}>{car.price}</CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </SwiperSlide>
                            );
                        }
                    })}
                </Swiper>
            </div>
            {showModal && <CarModal show={showModal} closeModal={closeModal} data = {tempData} />}
        </>
    );
}

export default PopularCarSlider;