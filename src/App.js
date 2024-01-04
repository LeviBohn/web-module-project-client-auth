import React from 'react';
import './App.css';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className="link" to="/login">Login</Link>
        <Link className="link" to="/friends">Friends List</Link>
        <Link className="link" to="/friends/add">Add Friends</Link>
        <Link className="link" to="/logout">Logout</Link>
      </header>
      <Routes>

        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Navigate to="/" />} />

        {/* <PrivateRoute exact path="/friends" element={<FriendsList />} /> */}
        <Route exact path="/friends" element={<FriendsList />} />

        {/* <PrivateRoute exact path="/friends/add" element={<AddFriend />} /> */}
        <Route exact path="/friends/add" element={<AddFriend />} />

        {/* <PrivateRoute exact path="/logout" element={<Logout />} /> */}
        <Route exact path="/logout" element={<Logout />} />

      </Routes>
    </div>
  );
}

export default App;