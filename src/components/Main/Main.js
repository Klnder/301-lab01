import React from "react";
import HornedBeast from "./HornedBeast";
import data from "../../data.json";
import "./Main.css";

export default function Main() {
  return (
    <main>
      {data.map((HornedBeastElement) => (
        <HornedBeast title={HornedBeastElement.title} imageUrl={HornedBeastElement.image_url} description={HornedBeastElement.description} />
      ))}
    </main>
  );
}
