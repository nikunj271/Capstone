import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import UsersList from './components/UsersList.jsx';
import UserDetail from './components/UserDetail.jsx';
import EditUser from './components/EditUser.jsx';

function App() {
  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link to="/" className="mr-4">Users</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users/:id/edit" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;