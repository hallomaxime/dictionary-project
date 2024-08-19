import React from "react";

export default function Phonetics(props) {
  if (props.phonetic) {
    return <h3>{props.phonetic}</h3>;
  } else {
    return null;
  }
}
