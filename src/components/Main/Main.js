import React from "react";
import HornedBeast from "./HornedBeast";
import data from "../../data.json";
import "./Main.css";
import { useState } from "react";
import SelectedBeast from "./SelectedBeast";

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  function handleModal(imgUrl, description) {
    setShowModal(!showModal);
    setModalImg(imgUrl);
    setModalDescription(description);
  }
  const beasts = data.map((HornedBeastElement) => (
        <HornedBeast
          key={HornedBeastElement._id}
          title={HornedBeastElement.title}
          imageUrl={HornedBeastElement.image_url}
          description={HornedBeastElement.description}
          handleModal={handleModal}
        />));

  return (
    <main>
      {showModal && <SelectedBeast description={modalDescription} imageUrl={modalImg} handleModal={handleModal} />}
      {beasts}
    </main>
  );
}
