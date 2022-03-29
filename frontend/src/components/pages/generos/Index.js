import Main from '../../layout/Main';
import { Link } from 'react-router-dom';
import Tables from '../../itens/Tables';
export default function Index() {
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">Listagem de Gêneros</h5>
            <Link to="/generos/create/" className="nav-link">Novo Gênero</Link>
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