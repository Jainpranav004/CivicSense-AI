import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard';
import ComplaintsList from './components/ComplaintsList';
import { complaints } from './data/mockData';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-background-light">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/complaints" element={<ComplaintsList complaints={complaints} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
