import Main from '../../layout/Main';
import Tables from '../../itens/Tables';
import { Link } from 'react-router-dom';
export default function Index() {
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">Listagem de Professores</h5>
            <Link to="/professores/create/" className="nav-link">Novo Professor</Link>
        </div>
    )

    return (
        <>
            <Main header={header}>
                <Tables />
            </Main>
        </>
    )
}