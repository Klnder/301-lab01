import React from "react";
import { useState } from "react";

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
      <div class="Favorite">
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickMinus}>-</button>
        <p>❤️ {votes}</p>
      </div>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt="img Horned Beast" title="Horned beast"></img>
      <p>{props.description}</p>
    </article>
  );
}
