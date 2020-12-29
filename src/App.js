import React from 'react';
import profileImage from './img/me in woods.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>My new React App</h1>
      <h2>EddieJorden.tech</h2>
      <img  src={profileImage} />

    </div>
  );
}

export default App;
