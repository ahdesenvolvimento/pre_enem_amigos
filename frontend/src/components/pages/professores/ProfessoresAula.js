import Main from '../../layout/main/Main';
import Input from '../../itens/Input';
import TextArea from '../../itens/TextArea';
import CheckBox from '../../itens/CheckBox';
import Select from '../../itens/Select';
import Button from '../../itens/Button';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchPostPut from '../../hooks/useFetchPostPut';
import useFetchGet from '../../hooks/useFetchGet';
export default function Form() {
    let { id } = useParams();
    const {chamadaHook} = useFetchPostPut();
    const [professor, setProfessor] = useState([]);
    const [show, setShow] = useState(false);
    const [cores, setCores] = useState([]);

    const handleChange = (e) => {
        setProfessor({ ...professor, [e.target.name]: e.target.value });
    }

    const init = {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(professor)
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">{id ? (<>Editar Professor</>) : (<>Cadastro de Professores</>)}</h5>
            <Link to="/professores/index/" className="nav-link">Voltar</Link>
        </div>
    )

    const {data, isLoading, message} = useFetchGet('http://localhost:8000/usuarios/professor_disciplina/');
    
    const cadastrarAula = (e) => {
        e.preventDefault();
        const {data, message, isLoading} = chamadaHook('http://localhost:8000/professor_aula/', init);
    }

    return (
        <>
            <Main header={header} setShow={setShow} show={show}>
                <form action="" method="POST" onSubmit={cadastrarAula}>

                    <Input text="Horário de Início" name="horario_inicio" placeholder="Nome" handleOnChange={handleChange} type="time" />
                    <Input text="Data de início" name="data_inicio" placeholder="Nome social" handleOnChange={handleChange} type="date" />
                    <Input text="Data de término" name="data_fim" placeholder="Data de nascimento" handleOnChange={handleChange} type="date" />
                    <Input text="Horário de término" name="horario_fim" placeholder="CPF" handleOnChange={handleChange} type="time" />
                    <Select name="id_disc_prof" options={data} text="Disciplinas" handleOnChange={handleChange}/>
                    
                   <Button variant="success" type="submit" text="Salvar" />
                </form>
            </Main>
        </>
    )
}