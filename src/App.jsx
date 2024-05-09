import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import HomePage from './pages/HomePage'; // Home page
import GetProjectsPage from './pages/GetProjectsPage'; // "Get Projects" page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><HomePage /></>} /> {/* Navbar included for Home page */}
        <Route path="/get-projects" element={<GetProjectsPage />} /> {/* No Navbar for "Get Projects" */}
      </Routes>
    </Router>
  );
};

export default App;
