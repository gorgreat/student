import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ModalPopup = ({ message }) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
     </>;
};

ModalPopup.propTypes = {
    message: PropTypes.string
};

export default ModalPopup;
