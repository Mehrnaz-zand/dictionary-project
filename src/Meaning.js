import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    return (
        
        <div className = "Meaning">
            <h3 className= "mt-4 text-capitalize">
            {props.meaning.partOfSpeech}
            </h3>
            <div className="text-capitalize">
                 {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key= {index}>
                        <strong>Definition: </strong>
                        {definition.definition}
                        <br/>
             <em className= "text-capitalize">
                       <strong>Example: </strong>{definition.example}
                        </em>
                         <br/>
                         <Synonyms synonyms ={definition.synonyms} />
                    </div>
                       )
                    })}
                    
                </div>        
        </div>)
}
