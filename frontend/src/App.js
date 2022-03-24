import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
