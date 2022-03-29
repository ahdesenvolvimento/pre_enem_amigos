import Main from '../../layout/Main';
import Input from '../../itens/Input';
import Button from '../../itens/Button';
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchPostPut from '../../hooks/useFetchPostPut';
export default function Form() {
    let { id } = useParams()
    const {chamadaHook} = useFetchPostPut();
    const [genero, setGenero] = useState([]);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setGenero({ ...genero, [e.target.name]: e.target.value });
    }

    const init = {
        method: id ? "PUT" : "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(genero)
    }
    const cadastroGenero = (e) => {
        e.preventDefault();
        const {data, message, isLoading} = chamadaHook('http://localhost:8000/usuarios/genero/', init);
        setShow(true);
        if (isLoading) {
            setShow(false);
        }
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">{id ? (<>Editar Gênero</>) : (<>Cadastro de Gêneros</>)}</h5>
            <Link to="/generos/index/" className="nav-link">Voltar</Link>
        </div>
    )
    return (
        <>
            <Main header={header} setShow={setShow} show={show}>
                <form action="" method="POST" onSubmit={cadastroGenero}>
                    <Input text="Gênero" name="genero" placeholder="Gênero" handleOnChange={handleChange} type="text" />
                    <Button variant="success" type="submit" text="Salvar" />
                </form>
            </Main>
        </>
    )
}