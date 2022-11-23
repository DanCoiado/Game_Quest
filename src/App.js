import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


import Home from './components/pages/Home.js'
import Cadastro from './components/pages/Cadastro.js'
import Jogo from './components/pages/Jogo.js'
import Login from './components/pages/Login.js'
import HomeLogado from './components/pages/HomeLogado.js'
import GameOver from './components/pages/GameOver.js'

/*import Layout from './components/layout/container.js'*/

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Cadastro" element={<Cadastro/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/HomeLogado" element={<HomeLogado/>}/>
          <Route exact path="/Jogo" element={<Jogo/>}/>
          <Route exact path="/GameOver" element={<GameOver/>}/>
        </Routes>
    </Router>
  );
}

export default App;