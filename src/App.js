import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { StyledGlobal } from './assets/styledGlobal/styledGlobal';
import Footer from './components/ui/footer/Footer';
import Header from './components/ui/header/Header';
import MainRouter from './routes/Main.router';

function App() {
  return (
    <Router>
      <StyledGlobal/>
      <Header/>
      <MainRouter/>
      <Footer/>
    </Router>
  );
}

export default App;