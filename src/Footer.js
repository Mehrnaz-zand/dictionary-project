import React from "react";
import "./Footer.css";

export default function Footer(){
    return(
    <footer className="Footer">
      <small>
      This project is coded by {" "}
      <a href ="https://www.linkedin.com/in/mehrnaz-zand" target="_blank"
      rel="noreferrer" title="LinkedIn">
        Mehrnaz Zand{" "}</a> and is {" "}
      <a href="https://github.com/Mehrnaz-zand/dictionary-project" 
      target="_blank" rel="noreferrer" title="GitHub">
        open-sourced on GitHub
        </a> 
        {" "} and hosted on {" "}
       <a href ="https://peaceful-northcutt-dfe9be.netlify.app/" 
       target="_blank" rel="noreferrer"
       title="Netlify">Netlify</a>
      </small>
    </footer>
    )
}