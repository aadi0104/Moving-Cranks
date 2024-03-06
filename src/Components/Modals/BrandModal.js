import React from "react";

import { Image, Modal } from "react-bootstrap";
import BrandCardComponent from "./BrandCardComponent";

function BrandModal(props) {
    return (

        <div>
            <Modal
                show={props.show}
                onHide={props.closeModal}
                fullscreen={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3 style={{}}>
                            <Image src={props.data[0][1]} alt={props.data[0][0]} style={{ height: "30px", margin: " 2px 5px" }} />
                            {props.data[0][0]}
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="grid-container">
                        <BrandCardComponent brand={props.data[0][0]} />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default BrandModal;