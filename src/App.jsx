// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {

  return (
    <MainApp />
  );
}

const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
