import React from 'react'
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar";
import AppRouter from "./Components/AppRouter";


const App = (props) => {

    return (
        <BrowserRouter>
            <Navbar/>
           <AppRouter/>
        </BrowserRouter>
    )
}

export default App