import { Container, Card } from "react-bootstrap";
import styles from "./Main.module.css";
import {useEffect, useState} from 'react';
export default function Main({ content, header, title }) {
    const [statusHeader, setStatusHeader] = useState(false);
    const [elHeight, setElHeight] = useState(0)
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
                
                <Card.Header as="h5">{header}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}