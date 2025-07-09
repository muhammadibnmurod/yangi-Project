import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./Route/Header.jsx";
import Navbar from './Route/Navbar/Navbar.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Navbar/>
            </div>
        </BrowserRouter>
    )
}

export default App
