import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Avatar from 'react-avatar'
import logo from './images/profile pic.jpg';

export default props => {
  return (
    <Menu>
      <center><Avatar name="Vignesh Kumar" className="avatar" img src={logo}/><p>Vignesh Kumar</p></center>
      

      <center><a className="menu-item" href="/">
        Home
      </a></center>

      <center><a className="menu-item" href="/laravel">
        Laravel
      </a></center>

      <center><a className="menu-item" href="/angular">
        Angular
      </a></center>

      <center><a className="menu-item" href="/react">
        React
      </a></center>

      <center><a className="menu-item" href="/vue">
        Vue
      </a></center>

      <center><a className="menu-item" href="/node">
        Node
      </a></center>
    </Menu>
  );
};

//export default SideNavPage;