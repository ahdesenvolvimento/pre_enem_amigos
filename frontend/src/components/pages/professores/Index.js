import Main from '../../layout/Main';
import Tables from '../../itens/Tables';
import { Link } from 'react-router-dom';
import useFetchGet from '../../hooks/useFetchGet';
export default function Index() {
    const { data, isLoading, message } = useFetchGet('http://localhost:8000/usuarios/');
    let headerTable = [];
    if (!isLoading) {
        headerTable = Object.getOwnPropertyNames(data[0]);
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">Listagem de Professores</h5>
            <Link to="/professores/create/" className="nav-link">Novo Professor</Link>
        </div>
    )

    return (
        <>
            <Main header={header}>
                <Tables status={isLoading} header={headerTable} body={data}/>
            </Main>
        </>
    )
}