import { Header } from './Components/Header/Header';  
import MainInicio from './Components/Main/MainInicio';
import MainCanchas from './Components/Main/Canchas/MainCanchas';  
import MainImplementos from './Components/Main/Implementos/MainImplementos';
import MainCalendario from './Components/Main/Horario/MainHorario';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
        </Header>
        <Routes>
          <Route path="/" element={<MainInicio />} />
          <Route path="/horario" element={<MainCalendario />} />
          <Route path="/canchas" element={<MainCanchas />} />
          <Route path="/implementos" element={<MainImplementos />} />
        </Routes>
        <Footer>
        </Footer>
    </div>
    </Router>
    
  );
}

export default App;
