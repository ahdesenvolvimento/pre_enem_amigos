import Main from '../../layout/Main';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tables from '../../itens/Tables';
export default function Index() {
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">Listagem de Disciplinas</h5>
            <Link to="/disciplinas/create/" className="nav-link">Nova Disciplina</Link>
        </div>
    )
    return (
        <Main header={header}>
            <>
                <Tables />
            </>
        </Main>
    )
}