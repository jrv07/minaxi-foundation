import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/common/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ScholarshipProgram from './pages/ScholarshipProgram/ScholarshipProgram';
import ApplyScholarship from './pages/ApplyScholarship/ApplyScholarship';
import BoardMembers from './pages/BoardMembers/BoardMembers';
import Gallery from './pages/Gallery/Gallery';
import FinancialTransparency from './pages/FinancialTransparency/FinancialTransparency';
import Donate from './pages/Donate/Donate';
import Contact from './pages/Contact/Contact';
import Privacy from './pages/Privacy/Privacy';
import AdminLogin from './pages/Admin/Login/Login';
import AdminDashboard from './pages/Admin/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="scholarship-program" element={<ScholarshipProgram />} />
            <Route path="apply" element={<ApplyScholarship />} />
            <Route path="board-members" element={<BoardMembers />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="financial-transparency" element={<FinancialTransparency />} />
            <Route path="donate" element={<Donate />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;