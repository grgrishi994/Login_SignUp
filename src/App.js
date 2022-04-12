import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import GST from './components/pages/GST'
import TAN from './components/pages/TAN'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import HomePage from './components/pages/HomePage'
import AAA from './components/pages/AAA'


import './App.css'

export default function App() {
    return (
        <Router>
            <div>
            <Routes>
                    <Route exact path="/" element={ <LoginPage/> } ></Route>
                    <Route exact path="/login" element={ <LoginPage/> } ></Route>
                    <Route exact path="/register" element={ <RegisterPage/> } ></Route>
                    <Route exact path="/TAN" element={ <TAN/> } ></Route>
                    <Route exact path="/aadhar" element={ <AAA/> } ></Route>
                    <Route exact path="/GST" element={ <GST/> } ></Route>
                    <Route exact path="/home" element={<HomePage/> } ></Route>
                </Routes>
               
            </div>
        </Router>
    )
}

