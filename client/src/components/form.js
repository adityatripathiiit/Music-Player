import React, { Component } from 'react'
import swal from 'sweetalert';
import Loader from './loader';
const axios = require('axios');

const submitHandler = () => {
    axios.get('https://music--app.herokuapp.com/music')
  .then(function (res) {
        // handle success
        console.log(res);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}


const DeleteMusictest = (event ,id) => {
    event.preventDefault();
    console.log(id);
    swal({
          title: 'Are you sure?',
          text: 'Once deleted, you will not be able to recover this Music!',
          icon: 'warning',
          buttons: true,
          dangerMode: true
        }).then(willDelete => {
          if (willDelete) {
            axios.delete(`https://music--app.herokuapp.com/music/${id}`)
              .then(response => {
                swal('Poof! Your Music file has been deleted! Just reload the page to get new list', {
                  icon: 'success'
                })
                return ;
              })
              .catch(err => {
                swal('Error', 'Something went wrong', 'error')
              })
          } else {
            swal('Your Music file is safe!')
          }
        })
}
 
  

class form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            musicDetails: {
                title: '',
                artist: '',
                music: ''
              },
              isValid: false,
              isloadingadd: false,
            music: [],
            isloading: false
        }
        this.handletitlechange = this.handletitlechange.bind(this);
        this.handleartistchange = this.handleartistchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilechange = this.handleFilechange.bind(this);
    }


    handleSubmit = (event) => {
        event.persist();
        event.preventDefault();
        console.log(this.state.musicDetails.music);
        if (
            event.target.title.value === '' ||
            event.target.artist.value === '' ||
            event.target.customFile.value=== ''
          ) {
            swal('Error', 'Invalid Entries', 'error');
            event.preventDefault();
            return (!this.isValid);}
        else{
            const formData = new FormData();
            formData.append('title', event.target.title.value);
            formData.append('artist', event.target.artist.value);
            formData.append('music', this.state.musicDetails.music);
            this.setState({isloadingadd: true});
            axios.post('https://music--app.herokuapp.com/music', formData)
            .then(response => {
              console.log(response);
              this.setState({isloadingadd:true});
              this.musicDetails = {};
              this.getAllMusic() ;
              swal('Success', 'New Music Added', 'success');
            })
            .catch(err => {
              this.setState({loadingadd: true});
              swal('Error', 'Something Went wrong', 'error');
              console.log(err);
            })
        }
        // console.log(event.target.title.value);
        // console.log(event.target.artist.value);
        // console.log(event.target.customFile.value)
        
    }

    testfunc = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    handletitlechange = (event) => {
        this.setState({musicDetails: {title: event.target.value} });
        
    }
    handleartistchange = (event) => {
        this.setState({musicDetails: {artist: event.target.value} });
     
    }
    handleFilechange = (event) => {
        event.persist();
        const types = /(\.|\/)(mp3|mp4)$/i
        if (
            types.test(event.target.files[0].type) ||
            types.test(event.target.files[0].name)
        ) {
            this.setState({musicDetails: {music: event.target.files[0]} });
        } else {
            swal('Error', 'Invalid file type, Please change the file type', 'error');
            return !this.isValid;
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
            
            <section className="mt-5" >
                    <div className="container mb-4"  >
                    <div className="row" >
                        <div className="col-md-12" >
                        <div className="card" style={{borderRadius: 15,borderWidth: 4,borderColor: '#DA70D6',backgroundColor:'pink',}}>
                            <div className="card-body" >
                            <div className="card-title mb-4">
                                <h4 className="center" >Add Music</h4>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-field">
                                <label htmlFor="title" type = 'text'  className=" validate">Title</label>
                                <input type="text" className="validate" name = 'title' value = {this.state.musicDetails.title} onChange={this.handletitlechange} />
                                </div>
                                <div className="input-field">
                                <label htmlFor="artist">Artist</label>
                                <input type="text" className="validate" name='artist' value = {this.state.musicDetails.artist} onChange={this.handleartistchange} />
                                </div>
                                <div className="form-group">
                                <label htmlFor="artist">Music</label>
                                <div className="custom-file " >
                                    <input type="file" className="custom-file-input cyan"  onChange={ (e) => this.handleFilechange(e)}  id="customFile" style = {{marginBottom:'10px', marginLeft:'20px', borderRadius:'35px'}} />
                                    <label className="custom-file-label" htmlFor="customFile" >Choose file</label>
                                </div>
                                </div>
                                <div className="form-group col s6" style = {{marginTop:'20px'}}>
                                <input className="btn btn-primary"  disabled = {this.state.isValid}  type = 'submit' style={{borderRadius: 15}} value = "Submit" />
                                <Loader isloadingadd = {this.state.isloadingadd}/>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="card bg-light p-1 showdow-sm" style = {{borderRadius: 15,borderWidth: 4,borderColor: '#DA70D6',backgroundColor:'#00FF00',}}>
                            <div className="card-title">
                            <button className="btn btn-info m-3" style={{borderRadius: 15}}>Add Music</button>
                            </div>
                            <div className="card-body">
                            <Loader isloading = {this.state.isloading}/>
                            <table className="table">
                                <thead>
                                    
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Artist</th>
                                    <th scope="col">Date created</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                   
                                {this.state.music.map((data, index) =>{
                                    return (<tr key = { index }> 
                                        <td>{index+1}</td>
                                        <td >{data.title}</td>
                                        <td >{data.artist}</td>
                                        <td >  {data.created} </td> 
                                        <td><button className="btn btn-info" type = 'submit' style={{borderRadius: 15}}  onClick={e => DeleteMusictest(e,data._id)}>Delete</button></td>
                                        </tr>
                                    )
                                })}
                                
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
        )
    }
}

export default form
