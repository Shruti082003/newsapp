import React from 'react';
import Search from './Search';
import Allnews from './Allnews';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import './App.css';

function App() {
    return (
        <div className="header">
            <Router>
                <Link to='/SearchNews' className="link">SearchNews</Link>
                <Link to='/Allnews' className="link">AllNews</Link>
                <Routes>
                    <Route path='/' element={<Search />} />
                    <Route path='/SearchNews' element={<Search />} />
                    <Route path='/Allnews' element={<Allnews />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;