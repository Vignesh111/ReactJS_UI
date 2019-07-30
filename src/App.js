import React from 'react';
import SideBar from './SideNavPage';
//import myData from './data.json'
import Contacts from './contacts';
import Trending from './trending';
import { Component } from 'react';
import logo from './images/image12.jpg';
import player from './images/player.JPG';
import './App.css';

class App extends Component {
 state={
   contacts: [],
   topics: ['Angular','React','Vue']
 }

 
  render() {
  return (
    <div id="App">
      <center><img src={logo} className="header" alt="Smiley face" height="100px"></img></center>
      <SideBar />
      <div className="music-app">
        <Contacts />
        <Trending />
      </div>
      <div className="footer">
        <img src={player}  alt="Smiley face"></img>
      </div>
    </div>
  );
 }
}

export default App;
