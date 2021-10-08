import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
let [ results, setResults] = useState( null );

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
  
   
    setResults(response.data[0])
  }
  function search(event) {
    event.preventDefault();
   
   let apiUrl =  `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
 

   axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="dictionary">
      <section>
      <form onSubmit={search} 
      className= "search-form mb-5">
        <input
        className="input-field"
          type="search"
          placeholder="Enter your wold"
          onChange={handleKeyword}
        />

        <input type="submit" value="Search" className="search-button d-none d-md-inline-block" />
      </form>
      </section>
<Results results={ results} />

    </div>
  );
}
