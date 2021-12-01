import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css";
import Results from "./Results.js";
export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultWord); 
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function searchKeyword(response){
     setResults(response.data[0]);
    }
   
    function handleChange(event){
        setKeyword(event.target.value);
    }
    function search(){
        //https://dictionaryapi.dev/
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
         axios.get(apiUrl).then(searchKeyword);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function load(){
        setLoaded(true);
        search();
    }
    if (loaded){
    return (
        <div className="Dictionary">
            <section>
                
            <form onSubmit={handleSubmit} className ="text-center" target="_blank" rel="noreferrer">
                <input type="text" placeholder="Search a word..." 
                defaultValue={props.defaultWord}
                onChange={handleChange}/>
            </form>
            <div className="hint">
                i.e.: sun, happy, blue, joy...
            </div>
            </section>
        <Results results = {results} />
        </div>
    )
} else{
    load();
    return null
} }
