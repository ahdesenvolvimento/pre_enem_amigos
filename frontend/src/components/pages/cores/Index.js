import Main from '../../layout/main/Main';
import Tables from '../../itens/Tables';
import { Link } from 'react-router-dom';
import useFetchGet from '../../hooks/useFetchGet';
import {useState} from 'react'
export default function Index() {

    const { data, isLoading, message } = useFetchGet('http://localhost:8000/usuarios/cor/');
    const [dados, setDados] = useState([]);
    let headerTable = [];
    if (!isLoading) {
        headerTable = Object.getOwnPropertyNames(data[0]);
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">Listagem de Cores</h5>
            <Link to="/cores/create/" className="nav-link">Nova Cor</Link>
        </div>
    )
    const deletarLinha = (id) => {
        const init = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:8000/usuarios/cor/' + id, init)
            .then((response) => response.json())
            .then((data) => {
                fetch('http://localhost:8000/usuarios/cor/').then((response) => response.json()).then((data) => { setDados(data) })
            })
            .catch();
    }
    return (
        <Main header={header}>
            <Tables status={isLoading} header={headerTable} body={dados.length != 0 ? dados : data} url='/cores/edit/' deletarLinha={deletarLinha}/>
        </Main>
    )
}