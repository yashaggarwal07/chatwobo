import React from 'react';
import './App.css';
import Chat from './Chat';
import SideBar from './SideBar';    

function App() {
  return (
    <div className="App">
    <div className="app_body">
    <SideBar />
      <Chat/>  
    </div>
     
    </div>
  );
}

export default App;
