import React from 'react';
import SideBar from './SideNavPage';
//import myData from './data.json'
import Contacts from './contacts';
import Trending from './trending';
import { Component } from 'react';

import './App.css';

class App extends Component {
 state={
   contacts: [],
   topics: ['Angular','React','Vue']
 }

 
  render() {
  return (
    <div id="App">
      <SideBar topics={this.state.topics}/>
      <Contacts />
      <Trending />
   </div>
  );
 }
}

export default App;
