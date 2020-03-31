import React, { Component } from 'react'

export class footer extends Component {
    render() {
        return (
            <div>            
                <footer className="page-footer orange sticky" style={{Position: 'fixed', bottom:'0',left: '0', width: '100%'}} >
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Description</h5>
                                <p className="grey-text text-lighten-4">A music player, where you can add your music and play it</p>


                            </div>
                            <div className="col l6 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="white-text" href="https://github.com/adityatripathiiit/Music_Player" target="_blank">github.com</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            Create by <a className="orange-text text-lighten-3" href="#">Aditya Tripathi</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default footer;
