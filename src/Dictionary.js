import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js"


export default function Dictionary(){
    let [keyword, setKeyword] = useState("welcome"); 
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    
    function searchKeyword(response){
        setResults(response.data[0]);
        let pexelApiKey ="563492ad6f91700001000001327dcdb63baf4ebd84189650a23bdfe8";
        let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelApiKey}` };
        axios.get(pexelApiUrl, { headers: headers }).then(searchPhoto);
       }
   
    function searchPhoto(response){
        setPhotos(response.data.photos);
        
    }
    function handleChange(event){
        setKeyword(event.target.value);
    }
    function search(){
        //https://dictionaryapi.dev/
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
         axios.get(apiUrl).then(searchKeyword).catch(function(error) {
            alert("Oops, please try another word🤕");
});
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
            <form onSubmit={handleSubmit} className ="text-center"  
            target="_blank" rel="noreferrer" title="Search a word..."
            >
                <input type="search" placeholder="Search a word..." 
                onChange={handleChange}/>
            </form>
            <div className="hint">
                i.e. sun, happy, blue, joy...
            </div>
            </section>
        <Results results = {results} />
       <Photos photos = {photos} keyword = {keyword}/>
        </div>
    )
} else{
    
    load();
    return null
} }
