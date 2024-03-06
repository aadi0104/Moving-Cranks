import React from "react";

import { Image } from "react-bootstrap";

import { Modal } from "react-bootstrap";

function CarModal(props) {
    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.closeModal}
                backdrop="static"
                keyboard={false}
                centered
            >
                <div style={{boxShadow: "8px 8px 2vw black"}}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h3 style={{ color: "rgb(50, 50, 50)" }}>
                                {props.data[0][0]}
                            </h3>
                            <div id="modal-div">
                                <p style={{ fontSize: "15px" }}><span>Price: </span>{props.data[0][3]}</p>
                                <p style={{ fontSize: "15px" }}><span>Category: </span>{props.data[0][2]}</p>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={props.data[0][1]} alt={props.data[0][0]} fluid />
                        <p style={{ color: "rgb(79, 79, 79)", lineHeight: "21px" }}><span style={{ fontWeight: "bold" }}>Description: </span>{props.data[0][4]}</p>
                    </Modal.Body>
                </div>
            </Modal>
        </div>
    );
}

export default CarModal;