import React, { Component } from 'react';
import icon from './favicon.png';
import Sidenav from './sidenav'

class Navbar extends Component {
    
    
    
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue">
                    <a href="#" data-target="slide-out" className="sidenav-trigger waves-effect waves-light show-on-large"><i className="material-icons">menu</i></a>
                    <img src={icon} className="brand-logo  left " style={{marginLeft: 40}} alt="logo" height="60" />
                    <a href="#" className="brand-logo center" >Music Player</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>    
                        <div className="center row">
                            <div className="col s12 " >
                                <div className="row" id="topbarsearch">
                                <div className="input-field col s6 s12 red-text">
                                    <i className="red-text material-icons prefix">search</i>
                                    <input type="text" placeholder="Search" id="autocomplete-input" className="autocomplete red-text" />
                                    </div>
                                </div>
                                </div>
                            </div>          
                        </li>    
                        <li><a className="waves-effect waves-light" href="/">Music Player</a></li>
                        <li><a className="waves-effect waves-light"href="/manage">Music Manager</a></li>
                    </ul>
                    </div>
                </nav>
                <Sidenav />
                
  
                
            </div>
        )
    }
}

export default Navbar;
