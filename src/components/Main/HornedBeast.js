import React from "react";
import { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast(props) {
  const [votes, setVotes] = useState(0);

  function handleClickPlus() {
    setVotes(votes + 1);
  }
  function handleClickMinus() {
    if (votes > 0) {
      setVotes(votes - 1);
    }
  }

  return (
    <article>
      <h2>{props.title}</h2>
      <div className="Favorite">
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickMinus}>-</button>
        <p>❤️ {votes}</p>
      </div>
      <p>Number of horn :{props.numberHorn}</p>
      <img
        src={props.imageUrl}
        alt="img Horned Beast"
        title="Horned beast"
        onClick={() => props.handleModal(props.imageUrl, props.description)}
      ></img>
      <p>{props.description}</p>
    </article>
  );
}
