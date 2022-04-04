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
        method: id ? "PUT" : "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(professor)
    }
    const { data, isLoading, message } = useFetchGet('http://localhost:8000/usuarios/dados_cadastro/');
    console.log(data)
    // if (cores.length === 0){
    //     console.log(cores)
    //     setCores(data)
    // }
    console.log(cores)

    
    const cadastroAlunos = (e) => {
        e.preventDefault();
        console.log(professor)
        const {data, message, isLoading} = chamadaHook('http://localhost:8000/usuarios/alunos/', init);
        console.log(data);
        console.log(message);
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
                <form action="" method="POST" onSubmit={cadastroAlunos}>

                    <Input text="Nome" name="nome_oficial" placeholder="Nome" handleOnChange={handleChange} type="text" />
                    <Input text="Nome social" name="nome_social" placeholder="Nome social" handleOnChange={handleChange} type="text" />
                    <Input text="Data de nascimento" name="data_nasc" placeholder="Data de nascimento" handleOnChange={handleChange} type="date" />
                    <Input text="CPF" name="cpf" placeholder="CPF" handleOnChange={handleChange} type="text" />
                    <Input text="CEP" name="cep" placeholder="CEP" handleOnChange={handleChange} type="text" />
                    <Input text="Endereço" name="endereco" placeholder="Endereço" handleOnChange={handleChange} type="text" />
                    <Input text="N°" name="numero" placeholder="N°" handleOnChange={handleChange} type="number" />
                    <Input text="Bairro" name="bairro" placeholder="Bairro" handleOnChange={handleChange} type="text" />
                    <Input text="Cidade" name="cidade" placeholder="Cidade" handleOnChange={handleChange} type="text" />
                    <Input text="Estado" name="estado" placeholder="Estado" handleOnChange={handleChange} type="text" />
                    <TextArea text="Observações" name="observacoes" placeholder="Observações" handleOnChange={handleChange}/>
                    <Select name="id_genero" text="Gênero" options={data.generos} handleOnChange={handleChange}/>
                    <Select name="id_cor" text="Cor" options={data.cores} handleOnChange={handleChange}/>
                    <Input text="E-mail" name="email" placeholder="E-mail" handleOnChange={handleChange} type="email" />
                    <Input text="Usuário" name="username" placeholder="Usuário" handleOnChange={handleChange} type="text" />
                    {/* <Input text="Senha" name="password_one" placeholder="Senha" handleOnChange={handleChange} type="password" /> */}
                    <Input text="Confirme a senha" name="password" placeholder="Confirme a senha" handleOnChange={handleChange} type="password" />
                   <Button variant="success" type="submit" text="Salvar" />
                </form>
            </Main>
        </>
    )
}