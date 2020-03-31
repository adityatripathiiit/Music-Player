import React, { Component } from 'react'
import Header from'./navbar';
import Footer from './footer';
import Player_card from './player_card';
class player extends Component {
    componentDidMount() {
        const M = window.M;
        M.AutoInit();
    }
    
    render() {
        return (
            <div>
                <Header/>
                <Player_card />                
                <Footer/>
            </div>
        )
    }
}

export default player
