import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
       <nav className="navbar navbar-inverse navbar-fixed-top" data-spy="affix" data-offset-top="10">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
             <img className="img-thumbnail img-responsive img-nav" src="images/logo.png" alt="navbar"/>
           </a>

           <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
             <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
           </button>
         </div>

         <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
             <li><a href="#about">About Me</a></li>
             <li><a href="#projects">Projects</a></li>
             <li><a href="#contact">Contact</a></li>
           </ul>
         </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;