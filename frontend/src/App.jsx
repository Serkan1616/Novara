
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Backend'den kullanıcıları al
    axios
      .get('http://localhost:5000/api/users')  // Backend endpoint'ine GET isteği
      .then((response) => {
        setUsers(response.data); // Kullanıcıları state'e set et
      })
      .catch((error) => {
        console.error('Veri çekme hatası:', error);
      });
  }, []);

  return (
    <div>
      <h2>Kullanıcılar</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
  ;
}

export default App
