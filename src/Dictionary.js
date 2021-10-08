import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [ photos, setPhotos] = useState (null);


  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

function handlePexelResponse(response) {
  
  setPhotos(response.data.photos)
  
}

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    
    let pexelAPIKey = "563492ad6f91700001000001b70c4f56712a4eefabbe8f70269a03c4"
let pexelAPIUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`   

axios.get(pexelAPIUrl, { headers: { Authorization: `Bearer ${pexelAPIKey}` } }).then(handlePexelResponse);
  }

  return (
    <div className="dictionary">
      <section>
        <form onSubmit={search} className="search-form mb-5">
          <input
            className="input-field"
            type="search"
            placeholder="Enter your wold"
            onChange={handleKeyword}
          />

          <input
            type="submit"
            value="Search"
            className="search-button d-none d-md-inline-block"
          />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} keyword={keyword}/>
    </div>
  );
}
