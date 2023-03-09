import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../screens/Login'
import Signin from '../screens/Signin'


export default function RouterPage() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Signin />} />

                </Routes>   
            </Router>
        </div>
    )
}