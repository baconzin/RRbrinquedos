import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Instalacoes from './pages/Instalacoes';
import Contato from './pages/Contato';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/instalacoes" element={<Instalacoes />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;