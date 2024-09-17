// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import BookingPage from './pages/BookingPage/BookingPage';

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
        <Route path='/bookingPage' element={<BookingPage />} />
      </Routes>
    </Router>
  )
}

export default App;
