import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom/dist/react-router-dom.development";
import Detalles from "../components/Detalles";
import Home from "../components/Home";

export const Routers = ()=>{
    return (
        <>            
            <Router>                
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/detalles" element={<Detalles />} />
                </Routes>
            </Router>
        </>
    )
}