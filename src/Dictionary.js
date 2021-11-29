import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword] = useState(""); 
    
    function searchKeyword(event){
        setKeyword(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        alert (`Searching for ${keyword}`);
        
    }

    return (
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search a word" onChange={searchKeyword}/>
                
            </form>

        </div>
    )
}