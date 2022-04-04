import { Container, Card, Modal, Spinner } from "react-bootstrap";
import styles from "./Main.module.css";
import {useEffect, useState} from 'react';
export default function Main(props) {
    const [statusHeader, setStatusHeader] = useState(false);
    const [elHeight, setElHeight] = useState(0)

    const [message, setMessage] = useState(null);

    const handleClose = () => props.setShow(false);
    const handleShow = () => props.setShow(true);


    useEffect(() => {
        setStatusHeader(true);
    }, []);
    if (statusHeader){
        setElHeight(document.getElementById('header').clientHeight);
        setStatusHeader(false);
    }
    return (
        <div>
            <Card style={{minHeight: `calc(100vh - ${elHeight}px)`}}>
                
                <Card.Header as="h5">{props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Carregando...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}