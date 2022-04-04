import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Home from './components/pages/Home';
import { Container } from 'react-bootstrap';
import  Header  from './components/layout/header/Header';

import IndexCores from './components/pages/cores/Index';
import FormCores from './components/pages/cores/Form';

import IndexGeneros from './components/pages/generos/Index';
import FormGeneros from './components/pages/generos/Form';

import IndexDisciplinas from './components/pages/disciplinas/Index';
import FormDisciplinas from './components/pages/disciplinas/Form';

import IndexGraduacoes from './components/pages/graduacoes/Index';
import FormGraduacoes from './components/pages/graduacoes/Form';

import IndexAlunos from './components/pages/alunos/Index';
import FormAlunos from './components/pages/alunos/Form';
import AlunosTurmas from './components/pages/alunos/AlunosTurmas';

import IndexProfessores from './components/pages/professores/Index';
import FormProfessores from './components/pages/professores/Form';
import ProfessoresDisciplinas from './components/pages/professores/ProfessoresDisciplinas';
import ProfessoresAula from './components/pages/professores/ProfessoresAula';


import IndexTurmas from './components/pages/turmas/Index';
import FormTurmas from './components/pages/turmas/Form';

import useFetchGet from './components/hooks/useFetchGet';
import { useState } from 'react';

function App() {
  // Verifica se existe token no localStorage do navegador do usuário
  const token = localStorage.getItem('access-token');

  // Variável para controle da navbar, quando o usuário fizer login e logout a navbar irá se ajustar de acordo com esse
  const [statusNav, setStatusNav] = useState(false)

  if (token && !statusNav){setStatusNav(true);}

  /*
    Pega o stauts do usuário autenticado, se for true e for membro da equipe, é um professor ADM, caso true e não for membro da equipe, é um professor que não é administrador
    caso false em ambos, é um aluno.
  */
  const [adm, setAdm] = useState(false);
  const {data} = useFetchGet('http://localhost:8000/usuarios/status/2');
  console.log(data.status)
  return (
    <div className="App">
      <Router>
        <Header token={token} statusNav={statusNav} setStatusNav={setStatusNav}/>
        <Container>
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

              <Route path="/alunos/index" element={<IndexAlunos />} />
              <Route path="/alunos/create" element={<FormAlunos />} />
              <Route path="/alunos/edit/:id" element={<FormAlunos />} />
              <Route path="/alunos/turmas/:id" element={<AlunosTurmas />} />

              <Route path="/professores/index" element={<IndexProfessores />} />
              <Route path="/professores/create" element={<FormProfessores />} />
              <Route path="/professores/edit/:id" element={<FormProfessores />} />
              <Route path="/professores/disciplinas/:id" element={<ProfessoresDisciplinas />} />
              <Route path="/professores/aula/create/:id" element={<ProfessoresAula />} />

              <Route path="/turmas/index" element={<IndexTurmas />} />
              <Route path="/turmas/create" element={<FormTurmas />} />
              <Route path="/turmas/edit/:id" element={<FormTurmas />} />
              <Route path="*" element={<Navigate to="/" />} />
              
            </>) : (<>
              <Route path="/login" element={<Login statusNav={statusNav} setStatusNav={setStatusNav}/>} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>)}

          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
