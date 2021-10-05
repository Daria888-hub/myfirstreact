import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";

export default function Results(props) {
  
  if (props.results) {
    return (
      <div className="results">
        <h1>{props.results.word} </h1>

        {props.results.phonetics.map(function(phonetic,index){return(
          <div key = { index}>
            <Phonetic phonetic = {phonetic}/>
            </div>
        )})}
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
