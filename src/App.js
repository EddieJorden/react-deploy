import React from 'react';
import profileImage from './img/me in woods.jpg';
import './App.css';
function App() {
  const headerStyles = {fontSize: "24px", fontWeight: "strong"}
  const headerContainerStyle = {height: "100px", justifyContent: "center", display: "flex", flexDirection: "column"}
  return (
    <div className="App">
      <div style={headerContainerStyle}>
        <div style={headerStyles}>I am EDDIE</div>
        <div style={headerStyles}>this is EddieJorden.tech</div>
      </div>
      <img  className="home-page-image" src={profileImage} alt=""/>
    </div>
  );
}
export default App;