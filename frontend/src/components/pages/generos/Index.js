import Main from '../../layout/Main';
import { Link } from 'react-router-dom';
import Tables from '../../itens/Tables';
import useFetchGet from '../../hooks/useFetchGet';
import {useState} from 'react';
import Button from '../../itens/Button';
export default function Index() {
    const { data, isLoading, message, setData } = useFetchGet('http://localhost:8000/usuarios/genero/');
    const [dados, setDados] = useState([]);
    let linha = { 'id': 1 }
    let headerTable = [];
    if (!isLoading) {
        headerTable = Object.getOwnPropertyNames(data[0]);
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">Listagem de Gêneros</h5>
            <Link to="/generos/create/" className="nav-link">Novo Gênero</Link>
        </div>
    )

    const deletarLinha = (id) => {
        const init = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:8000/usuarios/genero/' + id, init)
            .then((response) => response.json())
            .then((data) => {
                fetch('http://localhost:8000/usuarios/genero/').then((response) => response.json()).then((data) => { setDados(data) })
            })
            .catch();
    }

    return (
        <>
            <Main header={header}>
                <Tables status={isLoading} header={headerTable} body={dados.length != 0 ? dados : data} deletarLinha={deletarLinha} url="/generos/edit/" />
            </Main>
        </>
    )
}