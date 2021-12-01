import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css";
import Results from "./Results.js";
export default function Dictionary(){
    let [keyword, setKeyword] = useState(""); 
    let [results, setResults] = useState(null);

    function searchKeyword(response){
     setResults(response.data[0]);
    }
   
    function handleChange(event){
        setKeyword(event.target.value);
    }
    function search(event){
        //https://dictionaryapi.dev/
        event.preventDefault();
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
         axios.get(apiUrl).then(searchKeyword);
        
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search} className ="text-center" target="_blank" rel="noreferrer">
                <input type="text" placeholder="Search a word" onChange={handleChange}/>
                
            </form>
        <Results results = {results} />
        </div>
    )
}
