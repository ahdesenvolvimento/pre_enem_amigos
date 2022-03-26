import Main from '../../layout/Main';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Index() {
    const header = (
        <div className="d-flex justify-content-between">
            <h5 className="nav-link">Listagem de Cores</h5>
            <Link to="/cores/create/" className="nav-link">Nova Cor</Link>
        </div>
    )
    const content = (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    )
    return (
        <Main content={content} header={header}/>
    )
}