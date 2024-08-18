import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

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
          className="col-9 search"
        />
        <input type="submit" className="btn btn-primary col-2"></input>
      </form>
    </div>
  );
}
