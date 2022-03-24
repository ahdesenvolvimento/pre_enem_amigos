import Input from "../itens/Input";
import Button from '../itens/Button';

import styles from './Login.module.css';

import { Container, Modal, Spinner } from 'react-bootstrap';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useFetchPostPut from '../hooks/useFetchPostPut';

export default function Login() {
    const [usuario, setUsuario] = useState([]);
    const [show, setShow] = useState(false);
    const [data, setData] = useState([])
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario),
    }
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }
    // const { data, isLoading, message, } = useFetchPostPut('http://localhost:8000/autenticacao/token/', init)

    const efetuarLogin = (e) => {
        e.preventDefault();
        handleShow();
        fetch('http://localhost:8000/autenticacao/token/', init)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                if (!data.detail){
                    localStorage.setItem('access-token', data.access);
                    localStorage.setItem('refresh-token', data.refresh);
                    navigate('/');
                }
                
            })
            .catch((error) => {
                setMessage(error);
            })
            .finally(() => {
                setIsLoading(false);
                handleClose();
            })


    }
    return (
        <div className={styles.layout_principal}>
            <div className={styles.layout_secundario}>
                <div className="row">
                    <div className="col-12 mt-5">
                        <h4>LOGIN</h4>
                        <hr />
                    </div>
                    <div className="col-12">
                        <Container>
                            <form method="POST" action="" onSubmit={efetuarLogin}>
                                <Input name="username" type="text" placeholder="Usuário" text="Usuário" handleOnChange={handleChange} />
                                <Input name="password" type="password" placeholder="Senha" text="Senha" handleOnChange={handleChange} />
                                <Button type="submit" variant="primary" text="Entrar" />
                            </form>
                        </Container>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
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