import React from 'react'

function icon(props) {
    if(props.play){
    return (   
            <i className="material-icons" id="PausePlay"> pause</i>
    )}
    else{
        return(
        <i className="material-icons" id="PausePlay"> play_arrow</i>)
    }
}

export default icon;