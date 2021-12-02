import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){
     if (props.meaning){
    
     return (
        <div className= "Meaning">
            <h3 >
            {props.meaning.partOfSpeech}
            </h3>
            <div >
                 {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key= {index}>
                        <div className="definition" title="Definition">
                            {definition.definition}
                        </div>
                        <br/>
                        <div className="example" title="Example">
                            {definition.example}
                        </div>
                         
                         <Synonyms synonyms={definition.synonyms} />
                         <hr/>
                    </div>
                       );
                    })}
                    
                </div>        
        </div>);
}
else{
    return null
}
}
