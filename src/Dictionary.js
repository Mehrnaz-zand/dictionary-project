import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword] = useState(""); 

    function searchKeyword(response){
     console.log(response.data[0]);
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
            <form onSubmit={search}>
                <input type="text" placeholder="Search a word" onChange={handleChange}/>
                
            </form>

        </div>
    )
}
