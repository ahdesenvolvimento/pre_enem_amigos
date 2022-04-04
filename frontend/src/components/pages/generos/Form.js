import Main from '../../layout/main/Main';
import Input from '../../itens/Input';
import Button from '../../itens/Button';
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetchPostPut from '../../hooks/useFetchPostPut';
import useFetchGet from '../../hooks/useFetchGet';
export default function Form() {
    let { id } = useParams();
    const navigate = useNavigate();
    const { chamadaHook } = useFetchPostPut();
    const [genero, setGenero] = useState([]);
    const [show, setShow] = useState(false);

    const { data } = useFetchGet('http://localhost:8000/usuarios/genero/' + id)
    const handleChange = (e) => {
        setGenero({ ...genero, [e.target.name]: e.target.value });
    }
    const init = {
        method: id ? "PUT" : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(genero)
    }
    const cadastroGenero = (e) => {
        e.preventDefault();
        setShow(true);
        const { data, message, isLoading } = chamadaHook('http://localhost:8000/usuarios/genero/', init);
        if (!isLoading) {
            setShow(false);
        }
        navigate('/generos/index/');
        
    }

    const atualizaGenero = (e) => {
        e.preventDefault();
        const { data, message, isLoading } = chamadaHook('http://localhost:8000/usuarios/genero/'+id+'/', init);
        setShow(true);
        if (isLoading) {
            setShow(false);
        }
        navigate('/generos/index/');
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
                <form action="" method="POST" onSubmit={id ? atualizaGenero : cadastroGenero}>
                    <Input text="Gênero" name="genero" placeholder="Gênero" defaultValue={data.genero} handleOnChange={handleChange} type="text" />
                    <Button variant="success" type="submit" text="Salvar" />
                </form>
            </Main>
        </>
    )
}