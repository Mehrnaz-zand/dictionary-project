import React from "react";
import "./Results.css";
import Meaning from "./Meaning"


export default function Results(props){
    console.log(props.results);
    if (props.results){
    return (
        <div className = "Results">
            <h2 className="text-capitalize mt-5">
                {props.results.word}
            </h2>
            {props.results.phonetic}
            <a href={props.results.phonetics[0].audio} title = "Listen"> 🔊</a>
            {props.results.meanings.map(function(meaning, index){
                return (
                <div key={index}>
                    <Meaning meaning={meaning}/>
                    </div>
            );
            })}
        </div>
    );
}else {
    return (null)
}
}