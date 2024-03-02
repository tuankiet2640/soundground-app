import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter from react-router-dom
import Navbar, { Banner } from "./components/Banner/Navbar";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
            </div>
        </Router>
    );
}

export default App;
