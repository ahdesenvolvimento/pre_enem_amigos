import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Home from './components/pages/Home';
import { Container } from 'react-bootstrap';
import  Header  from './components/layout/Header';

import IndexCores from './components/pages/cores/Index';
import FormCores from './components/pages/cores/Form';

import IndexGeneros from './components/pages/generos/Index';
import FormGeneros from './components/pages/generos/Form';

import IndexDisciplinas from './components/pages/disciplinas/Index';
import FormDisciplinas from './components/pages/disciplinas/Form';

import IndexGraduacoes from './components/pages/graduacoes/Index';
import FormGraduacoes from './components/pages/graduacoes/Form';

import IndexProfessores from './components/pages/professores/Index';
import FormProfessores from './components/pages/professores/Form';

function App() {
  const token = localStorage.getItem('access-token');
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Routes>
            {token ? (<>
              <Route path="/" element={<Home />} />
              <Route path="/cores/index" element={<IndexCores />} />
              <Route path="/cores/create" element={<FormCores />} />
              <Route path="/cores/edit/:id" element={<FormCores />} />

              <Route path="/disciplinas/index" element={<IndexDisciplinas />} />
              <Route path="/disciplinas/create" element={<FormDisciplinas />} />
              <Route path="/disciplinas/edit/:id" element={<FormDisciplinas />} />

              <Route path="/graduacoes/index" element={<IndexGraduacoes />} />
              <Route path="/graduacoes/create" element={<FormGraduacoes />} />
              <Route path="/graduacoes/edit/:id" element={<FormGraduacoes />} />

              <Route path="/generos/index" element={<IndexGeneros />} />
              <Route path="/generos/create" element={<FormGeneros />} />
              <Route path="/generos/edit/:id" element={<FormGeneros />} />

              <Route path="/professores/index" element={<IndexProfessores />} />
              <Route path="/professores/create" element={<FormProfessores />} />
              <Route path="/professores/edit/:id" element={<FormProfessores />} />
              <Route path="*" element={<Navigate to="/" />} />
              
            </>) : (<>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>)}

          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
