import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Students from './Students/Students.js';
// import Users from './Users/Users.js';
// import Items from './Items/Items.js';
import Routes from './Routes.js'
import NavBar from './NavBar.js'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes />
    </div>
  );
}

export default App;
