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
export default function ProfessoresDisciplinas() {
    let { id } = useParams();
    const {chamadaHook} = useFetchPostPut();
    const [professor, setProfessor] = useState([]);
    const [show, setShow] = useState(false);
    const [disciplinas, setDisciplinas] = useState([]);

    const handleChange = (e) => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setDisciplinas(value)
    }

    const init = {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"professor":id, "disciplinas":disciplinas})
    }
    const { data, isLoading, message } = useFetchGet('http://localhost:8000/usuarios/disciplinas/');
    const vincularDisciplinas = (e) => {
        e.preventDefault();
        const {data, message, isLoading} = chamadaHook('http://localhost:8000/usuarios/professor_disciplina/', init);
        // setShow(true);
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">{id ? (<>Editar Professor</>) : (<>Cadastro de Professores</>)}</h5>
            <Link to="/professores/index/" className="nav-link">Voltar</Link>
        </div>
    )

    return (
        <>
            <Main header={header} setShow={setShow} show={show}>
                <form action="" method="POST" onSubmit={vincularDisciplinas}>
                    <Select name="id_disciplina" multiple="multiple" handleOnChange={handleChange} options={data}/>
                   <Button variant="success" type="submit" text="Salvar" />
                </form>
            </Main>
        </>
    )
}