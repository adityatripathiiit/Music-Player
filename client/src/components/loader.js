import React, { Component } from 'react'
function Loader(props){
    if (props.isloading) {
      return (
        <div className="preloader-wrapper big active " style = {{marginLeft: '30rem'}}>
            <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
                <div className="circle"></div>
            </div><div className="gap-patch">
                <div className="circle"></div>
            </div><div className="circle-clipper right">
                <div className="circle"></div>
            </div>
            </div>
        </div>
      );
    }
    else{
        return(
            <div>
            </div>
        )
    }
  }
export default Loader;