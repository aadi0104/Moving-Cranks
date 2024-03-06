import React, { useEffect, useState } from "react";

import brands from "./Brands.json"

import { Card, CardImg } from 'reactstrap';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BrandModal from "../Modals/BrandModal";

function BrandSlider() {

    const [showModal, setShowModal] = useState(false);

    const [tempData, setTempData] = useState([])

    const [slidenumber, setSlideNumber] = useState(window.innerWidth);

    const getData = (name, image) => {
        let temp = [name, image];
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
                    {brands.map((brand) => (
                        <SwiperSlide>
                            <div onClick={() => { getData(brand.name, brand.image); }}>
                                <Card style={{ padding: "2rem 0", margin: "10px auto" }} key={brand.id}>
                                    <CardImg style={{ height: "200px", width: "200px", margin: "auto" }} src={brand.image} alt={brand.name} />
                                </Card>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {showModal && <BrandModal show={showModal} closeModal={closeModal} data = {tempData} />}
        </>
    );
}

export default BrandSlider;