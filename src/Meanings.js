import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
 
  return (
    <div className="meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
             <strong>Definition</strong> {definition.definition} <br />
              <em> <strong> Example</strong> {definition.example }</em>
              <br/>
              < Synonyms synonyms = { definition.synonyms}/> 
            </p>
          </div>
        );
      })}
    </div>
  );
}
