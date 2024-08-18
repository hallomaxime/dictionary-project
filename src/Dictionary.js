import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `dbaa90bd0tdaf4424ef37230ff2fcfo8`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="row justify-content-center">
        <input
          type="search"
          onChange={handleKeywordChange}
          id="search"
          className="col-9 search"
        />
        <input
          type="submit"
          id="submit"
          className="btn btn-primary col-2"
        ></input>
      </form>
      <Results results={results} />
    </div>
  );
}
