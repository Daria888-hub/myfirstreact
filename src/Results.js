import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";


export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h1>{props.results.word} </h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <section key={index}>
              <Meanings meanings={meanings} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
