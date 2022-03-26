import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Home from './components/pages/Home';
import { Container } from 'react-bootstrap';
import  Header  from './components/layout/Header';
import IndexCores from './components/pages/cores/Index';
import FormCores from './components/pages/cores/Form';
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
