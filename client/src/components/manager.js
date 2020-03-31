import React, { Component } from 'react'
import Header from'./navbar';
import Footer from './footer';
import Form from './form.js';
export class player extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Form />
                <Footer/>
            </div>
        )
    }
}

export default player
