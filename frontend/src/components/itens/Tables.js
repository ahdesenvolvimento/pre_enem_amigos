import { Table, Spinner } from 'react-bootstrap';
export default function Tables({ status, header, body }) {
    return (
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
                                    <th>{titulo}</th>
                                ))}
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
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </>
    )
}