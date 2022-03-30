import { Table, Spinner } from 'react-bootstrap';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Tables({ status, header, body, url, deletarLinha }) {
    return (

        <>
            {header.length !== 0 ? (
                <>
                    {status ? (
                        <>
                            <div className="text-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        </>
                    ) : (
                        <>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        {header.map((titulo) => (
                                            <th>{titulo[0].toUpperCase() + titulo.substr(1)}</th>
                                        ))}
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {body.map((linha) => (
                                        <tr>
                                            {
                                                Object.values(linha).map((item) => (
                                                    <td>{item}</td>
                                                ))
                                            }
                                            <td className="d-flex justify-content-around">
                                                <Link to={url + linha.id} className="btn btn-primary">Editar</Link>
                                                <Button type="button" text="Deletar" variant="danger" handleOnClick={(e) => deletarLinha(linha.id)}/>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    )}

                </>
            ) : (
                <>
                    <p>Sem dados disponíveis</p>
                </>
            )}
        </>
    )
}