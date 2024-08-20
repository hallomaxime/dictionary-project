import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `dbaa90bd0tdaf4424ef37230ff2fcfo8`;
    let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
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
          placeholder="Please enter a word that you would like to look up…"
          className="col-9 search"
        />
        <input
          type="submit"
          id="submit"
          className="btn btn-primary col-auto"
        ></input>
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
