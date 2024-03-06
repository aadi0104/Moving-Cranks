import React from "react";

import data from "../CarSlider/Data.json";

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import CarModal from "./CarDetailsModals";
import { useState } from "react";

function BrandCardComponent(props) {

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

    return (
        <>
            {data.map((car) => {
                if (car.brand === props.brand) {
                    return (
                        <div onClick={() => { getData(car.name, car.image, car.category, car.price, car.description); }}>
                            <Card key={car.id} style={{ boxShadow: "1.5px 1px 5px black" }}>
                                <CardImg src={car.image} alt={car.name} />
                                <CardBody>
                                    <CardTitle style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{car.name}</CardTitle>
                                    <CardText style={{ fontWeight: "bold", fontSize: "0.9rem" }}>{car.price}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    );
                }
            })}
            {showModal && <CarModal show={showModal} closeModal={closeModal} data={tempData} />}
        </>
    );
}

export default BrandCardComponent;