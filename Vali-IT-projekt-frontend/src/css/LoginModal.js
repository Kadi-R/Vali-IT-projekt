import Button from "reactstrap/src/Button";
import React from "react";
import {Modal} from 'react-bootstrap'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Lisa kasutaja</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Kasutaja</h4>
                    <p>
                        Siia tuleb kasutaja lisamise funktsionaalsus
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};