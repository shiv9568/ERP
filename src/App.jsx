import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import IdCard from './pages/IdCard';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <UserProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<><Dashboard /><BottomNav activePath="/" /></>} />
          <Route path="/profile" element={<><Profile /><BottomNav activePath="/profile" /></>} />
          <Route path="/settings" element={<><Settings /><BottomNav activePath="/settings" /></>} />
          <Route path="/id-card" element={<><IdCard /><BottomNav activePath="/id-card" /></>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
