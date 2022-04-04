import Main from '../../layout/main/Main';
import CheckBox from '../../itens/CheckBox';
import Input from '../../itens/Input';
import Button from '../../itens/Button';
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchPostPut from '../../hooks/useFetchPostPut';
export default function Form() {
    let {id} = useParams();
    const {chamadaHook} = useFetchPostPut();
    const [turma, setTurma] = useState([]);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setTurma({ ...turma, [e.target.name]: e.target.value });
    }

    const init = {
        method: id ? "PUT" : "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(turma)
    }
    const cadastroTurma = (e) => {
        e.preventDefault();
        const {data, message, isLoading} = chamadaHook('http://localhost:8000/turmas/', init);
        setShow(true);
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">{id ? (<>Editar Turma</>) : (<>Cadastro de Turmas</>)}</h5>
            <Link to="/turmas/index/" className="nav-link">Voltar</Link>
        </div>
    )
    return (
        <>
            <Main header={header} setShow={setShow} show={show}>
                <form action="" method="POST" onSubmit={cadastroTurma}>
                    <CheckBox text="Status da turma" value="checked" name="status_turma"handleOnChange={handleChange}/>
                    <Input text="Vagas" name="vagas_turma" placeholder="Vagas disponíveis" handleOnChange={handleChange} type="number" />
                    <Button variant="success" type="submit" text="Salvar" />
                </form>
            </Main>
        </>
    )
}