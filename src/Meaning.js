import React from "react";

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
                        {definition.definition}
                        <br/>
             <em className= "text-capitalize">
                       {definition.example}
                        </em>
                        <br/>
                        <br/>
                        {definition.synonyms.map(function(synonym, index){
                            return(
                                <div key= {index} className="d-inline ms-1 text-muted text-capitalize">
                                {synonym},
                                
                                </div>
                                
                                    );
                             })}
                             <br/>
                    </div>
                       )
                    })}
                    
                </div>        
        </div>)
}
