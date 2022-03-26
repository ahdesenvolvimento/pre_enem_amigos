import Main from '../../layout/Main';
import Input from '../../itens/Input';
import Button from '../../itens/Button';
import {useState} from "react";
import {Link} from "react-router-dom";
export default function Index() {
    const [cor, setCor] = useState([]);

    const handleChange = (e) => {
        setCor({...cor, [e.target.name]:e.target.value});
    }

    const cadastroCor = (e) => {
        e.preventDefault();
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">Cadastro de Cores</h5>
            <Link to="/cores/index/" className="nav-link">Voltar</Link>
        </div>
    )
    const content = (
        <>
            <form action="" method="POST" onSubmit={cadastroCor}>

            <Input text="Cor" name="cor" placeholder="Cor" handleOnchange={handleChange} type="text"/>
            <Button variant="success" type="submit" text="Salvar"/>
            </form>
        </>
    )
    return (
        <Main content={content} header={header}/>
    )
}