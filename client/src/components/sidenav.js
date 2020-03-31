import React, { Component } from 'react';
import ins from './images/yuna.jpg';
import out from './images/office.jpg';

export class Sidenav extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {edge:'right', draggable:true, });
          });
    }
    render() {
        return (
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={out} />
                            </div>
                            <a href="#user">
                                <img className="circle" src={ins} />
                            </a>
                            <a href="#name">
                                <span className="white-text name">Aditya Tripathi</span>
                            </a>
                            <a href="#email">
                                <span className="white-text email">adityatrips1@gmail.com</span>
                            </a>
                        </div>
                    </li>
                    <li><a href="/"><i className="material-icons">music_video</i>Player</a></li>
                    <li><a href="/manage"> <i className="material-icons">library_music</i>Manager</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Login</a></li>
                    <li><a className="waves-effect" href="#!">Logout</a></li>
                </ul>
        )
    }
}

export default Sidenav
