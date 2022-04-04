import Main from '../../layout/main/Main';
import Input from '../../itens/Input';
import Button from '../../itens/Button';
import { useState } from "react";
import useFetchPostPut from '../../hooks/useFetchPostPut';
import { Link, useParams } from "react-router-dom";
export default function Form() {
    let { id } = useParams();
    const {chamadaHook} = useFetchPostPut();
    const [graduacao, setGraduacao] = useState([]);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setGraduacao({ ...graduacao, [e.target.name]: e.target.value });
    }
    const init = {
        method: id ? "PUT" : "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(graduacao)
    }

    const cadastroGraduacao = (e) => {
        e.preventDefault();
        const {data, message, isLoading} = chamadaHook('http://localhost:8000/usuarios/graduacoes/', init);
        setShow(true);
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">{id ? (<>Editar Graduação</>) : (<>Cadastro de Graduações</>)}</h5>
            <Link to="/graduacoes/index/" className="nav-link">Voltar</Link>
        </div>
    )

    return (
        <>
            <Main header={header} setShow={setShow} show={show}>
                <form action="" method="POST" onSubmit={cadastroGraduacao}>

                    <Input text="Graduação" name="graduacao" placeholder="Graduação" handleOnChange={handleChange} type="text" />
                    <Button variant="success" type="submit" text="Salvar" />
                </form>
            </Main>
        </>
    )
}