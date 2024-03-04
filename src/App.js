import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import Podcast from './pages/Podcast/Podcast';
import Upload from './pages/Upload/Upload';
import Profile from './pages/Profile/Profile';
import Navbar from "./components/Banner/Navbar";
import Player from "./components/common/Player";

function App() {
    return (
        <Router>
            <Navbar />
            <Player />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/podcast/:id" element={<Podcast />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/profile/:username" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
