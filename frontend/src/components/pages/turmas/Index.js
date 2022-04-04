import Main from '../../layout/main/Main';
import { Link } from 'react-router-dom';
import Tables from '../../itens/Tables';
import useFetchGet from '../../hooks/useFetchGet';
export default function Index() {
    const { data, isLoading, message } = useFetchGet('http://localhost:8000/turmas/');
    let headerTable = [];
    if (!isLoading) {
        headerTable = data.length != 0 ? Object.getOwnPropertyNames(data[0]) : '';
    }
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">Listagem de Turmas</h5>
            <Link to="/turmas/create/" className="nav-link">Nova Turma</Link>
        </div>
    )
    const actions = (
        <td className="d-flex flex-column">
            <Link to="/">Vincular aula</Link>
            <Link to="/">Editar</Link>
            <Link to="/">Deletar</Link>
        </td>
    )
    return (
        <>
            <Main header={header}>
                <Tables status={isLoading} header={headerTable} body={data} actions={actions}/>
            </Main>
        </>

    )
}