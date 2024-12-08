import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import AdminPage from './pages/AdminPage';
import PrivateRoute from './PrivateRoute';
import MainPage from './pages/MainPage';
import Feedbacks from './pages/Feedbacks';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Private route for admin users */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage/>
            </PrivateRoute>
          }
        />
          {/* Private route for admin users */}
          <Route
          path="/main"
          element={
            <PrivateRoute>
              <MainPage/>
            </PrivateRoute>
          }
        />
        {/* Private route for admin users */}
        <Route
          path="/feedbacks"
          element={
            <PrivateRoute>
              <Feedbacks/>
            </PrivateRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
