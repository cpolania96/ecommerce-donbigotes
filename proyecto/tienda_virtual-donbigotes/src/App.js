import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './modules/ProyectModules/header/header';
import Main from './modules/ProyectModules/Main/Main';
import Footer from './modules/ProyectModules/Footer/Footer';
import ItemDetailContainer from './modules/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './Context/cartContext';

const App = () => {
    return (
        <CartContextProvider >
            <BrowserRouter >
                <Header />
                <Routes >
                    <Route exact path='/' element={<Main />} />
                    <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer />} />
                    <Route exact path='/' />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>

    )
}

export default App;
