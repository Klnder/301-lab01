import React from "react";

export default function HornedBeast(param) {
  return (
    <div>
      <h2>{param.title}</h2>
      <img src={param.imageUrl} alt="img Horned Beast" title="Horned beast"></img>
      <p>{param.description}</p>
    </div>
  );
}
