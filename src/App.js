import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


import Home from './components/pages/Home.js'
import Cadastro from './components/pages/Cadastro.js'
import Jogo from './components/pages/Jogo.js'
import Login from './components/pages/Login.js'
<<<<<<< HEAD
import Perguntas from './components/pages/Perguntas.js'
=======
import HomeLogado from './components/pages/HomeLogado.js'
import GameOver from './components/pages/GameOver.js'
>>>>>>> biadev

/*import Layout from './components/layout/container.js'*/

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
      <div>
        <Link to="/">Home</Link>
        <Link to="/Cadastro">Cadastro</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Jogo">Jogo</Link>
        <Link to="/Perguntas">Perguntas</Link>
      </div>
      <Switch>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/Jogo">
            <Jogo />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Perguntas">
            <Perguntas />
          </Route>
        </Container>
      </Switch>
=======
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Cadastro" element={<Cadastro/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/HomeLogado" element={<HomeLogado/>}/>
          <Route exact path="/Jogo" element={<Jogo/>}/>
          <Route exact path="/GameOver" element={<GameOver/>}/>
        </Routes>
>>>>>>> biadev
    </Router>
  );
}

export default App;