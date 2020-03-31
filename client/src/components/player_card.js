import React, { Component } from 'react';
import back1 from './images/fun.png';
import Icon from './icon';
import axios from 'axios';
import Loader from './loader';
import swal from 'sweetalert';
class player_card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current:{
                title: 'Default',
                artist: 'Default'
            },
            play : false,
            music: [],
            isloading: false,
            player: new Audio(),
            index: 0
        };
        this.playAudio = this.playAudio.bind(this);
        
        this.play = this.play.bind(this);
        
    }
    

    play(event,song) {
        event.preventDefault();
        if(song.music){
            if(!this.state.play){
                this.setState({current: song}); 
                this.state.player.src = `https://music--app.herokuapp.com/${song.music.path}`;
                this.state.player.play();    
                this.state.player.ontimeupdate = () => {
                    var d = Number(this.state.player.currentTime)
                    var m = Math.floor(d % 3600 / 60);
                    var s = Math.floor(d % 3600 % 60);
                    var z = ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
                    document.getElementById("position").innerHTML = z
                    document.getElementById("seekbar").value = this.state.player.currentTime;
                    var d = Number(this.state.player.duration);
                    var m = Math.floor(d % 3600 / 60);
                    var s = Math.floor(d % 3600 % 60);
                    var z = ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
                    document.getElementById("total").innerHTML = z;
                    this.setState({play:true})
                };
        }
        else{
            this.state.player.pause();
            this.setState({play:false});
        }   
    }
        else{
            swal('Error', 'Music File does not exist', 'error');
        }
    }
      
    next(event) {
        event.preventDefault();
        if(this.state.play){
            this.state.player.pause();
            this.setState({play: false});
        }
        var temp = this.state.index+1;
        this.setState({index: temp});
        if (temp > this.state.music.length - 1) {
          temp = 0;
          this.setState({index: 0});
        }
         var temp2 = this.state.music[temp];
        this.play(event,temp2);
      }
    
    prev(event) {
        event.preventDefault();
        if(this.state.play){
            this.state.player.pause();
            this.setState({play: false});
        }
        var temp = this.state.index-1;
        this.setState({index: temp});
        if (temp < 0) {
          temp = this.state.music.length - 1;
          this.setState({index: temp});
        }
         var temp2 = this.state.music[temp];
        this.play(event,temp2);
      }

    playAudio() {
        
        if(this.state.play){
            this.state.player.pause();
            this.setState({play: false});
        }
        else{
            this.state.player.play();
            this.setState({play: true});    
        }
        
      }
    async getAllMusic() {
        this.setState({isloading: true});
        try{
            const data =  await axios.get('https://music--app.herokuapp.com/music');
            this.setState({music: data.data, isloading: false});
        }
        catch(e){
            this.state.isloading = false;
            swal('Error', 'Error Fetching Musics', 'error');
        }
    }
    componentDidMount() {
        this.getAllMusic();
        
    }

   
      
    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col xl3 l3 m3"></div>
                        <div className="col xl6 l6 m6 s12">
                            <div className="hide" id="materialize-music-player">
                            <audio className="audio-element" id= 'play'>
                            <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
                            </audio>
                               
                            </div>
                            <div className="card">
                                <div className="card-image">
                                    <img src={back1} alt="fun.png"/>
                                        <a className="btn-floating btn-large left halfway-fab waves-effect waves-light teal" onClick={e => this.prev(e)}>
                                        <i className="material-icons" id="prev">navigate_before</i>
                                        </a>
                                        <a className="btn-floating btn-large  halfway-fab waves-effect waves-light teal" onClick={e => this.next(e)}>
                                            <i className="material-icons" id="next">navigate_next</i>
                                        </a>
                                </div>
                                <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal play" onClick={this.playAudio}>
                                            <Icon play = {this.state.play} />
                                </a>
                                <div className="card-content">
                                    <h5>{this.state.current.title +'-' +this.state.current.artist}</h5>
                                    <div className="row valign-wrapper">
                                        <div className="col s2" id="position">00:00</div>
                                        <div className="col s6 range-field valign-wrapper">
                                            <input id="seekbar"  type="range" min="0" max="NaN" step="1"/>
                                        </div>
                                        <div className="col s2 center-align" id="total">aN:aN</div>
                                        <div>
                                            <a>
                                                <i className="material-icons teal-text lighten-1" id="Muted">volume_up</i>
                                            </a>
                                        </div>
                                        <div className="col s3 range-field valign-wrapper">
                                            <input id="vol-control" type="range" min="0" max="100" step="1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col xl3 l3 m3"></div>
                    </div>
                </div>
                <section>
                    <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                        <Loader isloading = {this.state.isloading}/>
                        <div className="card shadow">
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Artist</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            {this.state.music.map((data, index) => {
                                    return(<tr key = { index }> 
                                        <td>{index+1}</td>
                                        <td >{data.title}</td>
                                        <td >{data.artist}</td>
                                        <td><button className="btn btn-info" style={{borderRadius: 15}} onClick={(e) => this.play(e,data)} >Play</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default player_card



