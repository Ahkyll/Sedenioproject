import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main'; // Adjust path as needed
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Add other routes for different pages */}
      </Routes>
      
      <Footer/>


    </Router>
  );
};

export default App;
