import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { StyledGlobal } from './assets/styledGlobal/styledGlobal';
import Footer from './components/ui/footer/Footer';
import Header from './components/ui/header/Header';
import MainRouter from './routes/Main.router';
import TopHeader from "./components/ui/header/top/TopHeader";

function App() {
  return (
    <Router>
      <StyledGlobal/>
      <TopHeader/>
      <Header/>
      <main>
        <MainRouter/>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;