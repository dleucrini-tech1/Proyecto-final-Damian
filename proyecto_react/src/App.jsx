import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';

import imgenlogo from "./assets/LogodeaperturaDamian.png";


import Titulo from './components/header';

import Home from './pages/home';


import Seleccionarturnos from './pages/seleccionarturno';

import Importimagen from './components/logo';

import Contactos from './pages/Contactos';
import Administrador from "./pages/Administrador";


function App() {
  return (
    <BrowserRouter>
      <Titulo />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/turnos" element={<Seleccionarturnos />} />
        <Route path="/contacto" element={<Contactos />} />
        <Route path="/administracion" element={<Administrador />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;







