import Main from '../../layout/main/Main';
import { Link } from 'react-router-dom';
import Tables from '../../itens/Tables';
import useFetchGet from '../../hooks/useFetchGet';
export default function Index() {
    const { data, isLoading, message } = useFetchGet('http://localhost:8000/usuarios/disciplinas/');
    let headerTable = [];
    if (!isLoading) {
        headerTable = data.length != 0 ? Object.getOwnPropertyNames(data[0]) : '';
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">Listagem de Disciplinas</h5>
            <Link to="/disciplinas/create/" className="nav-link">Nova Disciplina</Link>
        </div>
    )
    return (
        <>
            <Main header={header}>
                <Tables status={isLoading} header={headerTable} body={data} />
            </Main>
        </>

    )
}