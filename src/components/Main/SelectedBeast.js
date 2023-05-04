import React from "react";

export default function SelectedBeast(props) {
  return (
    <div className="modal">
      <img className="modalimg" src={props.imageUrl} alt="img Horned Beast" title="Horned beast" onClick={() => props.handleModal()}></img>
      <p>{props.description}</p>
    </div>
  );
}
