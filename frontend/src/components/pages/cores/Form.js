import Main from '../../layout/Main';
import Input from '../../itens/Input';
import Button from '../../itens/Button';
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetchPostPut from '../../hooks/useFetchPostPut';
import useFetchGet from '../../hooks/useFetchGet';
export default function Form() {
    let { id } = useParams();
    let navigate = useNavigate();
    const { data } = useFetchGet('http://localhost:8000/usuarios/cor/' + id)
    const {chamadaHook} = useFetchPostPut();
    const [cor, setCor] = useState([]);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setCor({ ...cor, [e.target.name]: e.target.value });
    }

    const init = {
        method: id ? "PUT" : "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cor)
    }
    const cadastroCor = (e) => {
        e.preventDefault();
        const {data, message, isLoading} = chamadaHook('http://localhost:8000/usuarios/cor/', init);
        setShow(true);
        navigate('/cores/index/');
    }

    const atualizaCor = (e) => {
        e.preventDefault();
        const { data, message, isLoading } = chamadaHook('http://localhost:8000/usuarios/cor/'+id+'/', init);
        setShow(true);
        if (isLoading) {
            setShow(false);
        }
        navigate('/cores/index/');
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">{id ? (<>Editar Cor</>) : (<>Cadastro de Cores</>)}</h5>
            <Link to="/cores/index/" className="nav-link">Voltar</Link>
        </div>
    )
    return (
        <>
            <Main header={header} setShow={setShow} show={show}>
                <form action="" method="POST" onSubmit={id ? atualizaCor : cadastroCor}>
                    <Input text="Cor" name="cor" placeholder="Cor" defaultValue={data.cor} handleOnChange={handleChange} type="text" />
                    <Button variant="success" type="submit" text="Salvar" />
                </form>
            </Main>

        </>
    )
}