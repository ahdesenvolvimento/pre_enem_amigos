import Main from '../../layout/Main';
import Input from '../../itens/Input';
import Button from '../../itens/Button';
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchPostPut from '../../hooks/useFetchPostPut';
export default function Form() {
    let {id} = useParams();
    const {chamadaHook} = useFetchPostPut();
    const [disciplina, setDisciplina] = useState([]);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setDisciplina({ ...disciplina, [e.target.name]: e.target.value });
    }

    const init = {
        method: id ? "PUT" : "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(disciplina)
    }
    const cadastroDisciplina = (e) => {
        e.preventDefault();
        const {data, message, isLoading} = chamadaHook('http://localhost:8000/usuarios/disciplinas/', init);
        setShow(true);
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">{id ? (<>Editar Disciplina</>) : (<>Cadastro de Disciplinas</>)}</h5>
            <Link to="/disciplinas/index/" className="nav-link">Voltar</Link>
        </div>
    )
    return (
        <>
            <Main header={header} setShow={setShow} show={show}>
                <form action="" method="POST" onSubmit={cadastroDisciplina}>

                    <Input text="Disciplina" name="disciplina" placeholder="Disciplina" handleOnChange={handleChange} type="text" />
                    <Input text="Descrição" name="descricao" placeholder="Descrição" handleOnChange={handleChange} type="text" />
                    <Button variant="success" type="submit" text="Salvar" />
                </form>
            </Main>
        </>
    )
}