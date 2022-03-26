import {Link } from 'react-router-dom';
export default function Header() {
    return (
        <header id="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pré Enem Amigos</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                                <Link to="/" className="nav-link">Professores</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Alunos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Turmas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/graduacoes/index" className="nav-link">Graduações</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/disciplinas/index" className="nav-link">Disciplinas</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}