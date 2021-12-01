import React from "react";

export default function Phonetics(props){
    console.log(props.phonetic)
    return (
        <div className = "Phonetics">
            / {props.phonetic.text} /
            <a href={props.phonetic.audio} 
            className= "text-decoration-none" title = "Listen" target = "_blank" rel="noreferrer"> 🔊</a>
        </div>
    )
}