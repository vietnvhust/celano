import React from 'react'
import {useLocation} from "react-router-dom";
import {StyledGlobal} from './assets/styledGlobal/styledGlobal';
import Footer from './components/ui/footer/Footer';
import Header from './components/ui/header/Header';
import MainRouter from './routes/Main.router';
import TopHeader from "./components/ui/header/top/TopHeader";
import {CartContext} from "./contexts/Cart.Context";

function App() {
    const {closeSidebar} = React.useContext(CartContext)
    let location = useLocation();
    React.useEffect(() => {
        closeSidebar()
    }, [location]);
    return (
        <>
            <StyledGlobal/>
            <TopHeader/>
            <Header/>
            <main>
                <MainRouter/>
            </main>
            <Footer/>
        </>
    );
}

export default App;