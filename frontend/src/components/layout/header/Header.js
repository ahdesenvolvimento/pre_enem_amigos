import { Link, useNavigate } from 'react-router-dom';
import Button from '../../itens/Button';
import styles from "./Header.module.css";
import "bootstrap/js/src/collapse.js";
export default function Header({ token, statusNav, setStatusNav }) {
    let navigate = useNavigate();
    const logout = () => {
        const init = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access-token')
            }
        }
        fetch('http://localhost:8000/autenticacao/logout/', init)
            .finally(() => {
                localStorage.removeItem('access-token');
                localStorage.removeItem('refresh-token');
                setStatusNav(false);
                navigate('/login/');
            })
    }
    return (
        <header id="header" className={styles.bgHeader}>
            <div className="container">
                <nav className={!statusNav && !token ? ('d-flex justify-content-center ') : '' + "navbar navbar-expand-lg navbar-light"}>
                    <Link className="navbar-brand" to="/">Pré Enem Amigos</Link>
                    {statusNav && token ? (
                        <>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapseNavbar">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Início</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/generos/index" className="nav-link">Gêneros</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/cores/index" className="nav-link">Cor</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/professores/index" className="nav-link">Professores</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/alunos/index" className="nav-link">Alunos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/turmas/index" className="nav-link">Turmas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/graduacoes/index" className="nav-link">Graduações</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/disciplinas/index" className="nav-link">Disciplinas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/disciplinas/index" className="nav-link">Aulas</Link>
                                    </li>
                                    {token && (
                                        <>
                                            <li className="nav-item">
                                                <Button handleOnClick={(e) => logout()} className="nav-link" text="Logout" />
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}