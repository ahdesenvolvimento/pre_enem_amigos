import Main from '../../layout/main/Main';
import { Table } from 'react-bootstrap';
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
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((linha) => (
                            <tr>
                                {
                                    Object.values(linha).map((item) => (
                                        <td>{item}</td>
                                    ))
                                }
                                <td className="d-flex justify-content-around">
                                    <Link to='/' className="btn btn-primary">Editar</Link>
                                    <Link to={'/professores/aula/create/'+linha.id} className="btn btn-primary">Criar Aula</Link>
                                    <Link to={"/professores/disciplinas/"+linha.id} className="btn btn-primary">Vincular Disciplinas</Link>
                                    {/* <Button type="button" text="Deletar" variant="danger" /> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Main>
        </>
    )
}