import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics"


export default function Results(props){
   
    if (props.results){
    return (
        <div className = "Results">
            <section>
            <h2 >
                {props.results.word}
            </h2>
            <Phonetics phonetic ={props.results.phonetics[0]} />
          
         
        </section> 
            {props.results.meanings.map(function(meaning, index){
                return (
                <section key={index}>
                    <Meaning meaning={meaning} />
                    </section>
            );
            })}
        </div>
    );
}else {
    return null
}
}