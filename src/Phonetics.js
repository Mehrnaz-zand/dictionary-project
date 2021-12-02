import React from "react";
import "./Phonetics.css"

export default function Phonetics(props){
    if (props.phonetic){
    return (
        <div className = "Phonetics">
             <a href={props.phonetic.audio} title = "Listen" 
             target = "_blank" rel="noreferrer"> 🔊</a>
            <span className = "text" title="Phonetics">        
            / {props.phonetic.text} /
            </span>
           </div>
    )
    }else {
        return null
    }
}