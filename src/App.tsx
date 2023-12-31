import React from 'react';
import './scss/app.scss';
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";


function App() {
    return (<div className="wrapper">
        <Header/>
        <div className="content">
            <div className="container">
                <Routes>
                    <Route path="/pizza" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/pizza/:id" element={<Pizza/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>

            </div>
        </div>
    </div>);
}

export default App;
