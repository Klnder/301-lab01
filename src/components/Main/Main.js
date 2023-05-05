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
  const [form, setForm] = useState({
    sortSelect: "",
    inputValue: "",
  });

  let fullBeasts = data.map((HornedBeastElement) => (
    <HornedBeast
      key={HornedBeastElement._id}
      title={HornedBeastElement.title}
      numberHorn={HornedBeastElement.horns}
      imageUrl={HornedBeastElement.image_url}
      description={HornedBeastElement.description}
      handleModal={handleModal}
    />
  ));
  const [beasts, setBeasts] = useState(fullBeasts);

  function handleModal(imgUrl, description) {
    setShowModal(!showModal);
    setModalImg(imgUrl);
    setModalDescription(description);
  }
  function handleChange(event) {
    const newForm = { ...form, [event.target.name]: event.target.value };
    setForm(newForm);

    if (newForm.sortSelect === "hornNumber" && newForm.inputValue) {
      let beastsList = data.filter((HornedBeastElement) => HornedBeastElement.horns.toString() === newForm.inputValue);
      let beastsListElement = beastsList.map((HornedBeastElement) => (
        <HornedBeast
          key={HornedBeastElement._id}
          title={HornedBeastElement.title}
          numberHorn={HornedBeastElement.horns}
          imageUrl={HornedBeastElement.image_url}
          description={HornedBeastElement.description}
          handleModal={handleModal}
        />
      ));
      setBeasts(beastsListElement);
    } else if (newForm.sortSelect === "name" && newForm.inputValue) {
      let beastsList = data.filter((HornedBeastElement) => HornedBeastElement.title.startsWith(newForm.inputValue));
      let beastsListElement = beastsList.map((HornedBeastElement) => (
        <HornedBeast
          key={HornedBeastElement._id}
          title={HornedBeastElement.title}
          numberHorn={HornedBeastElement.horns}
          imageUrl={HornedBeastElement.image_url}
          description={HornedBeastElement.description}
          handleModal={handleModal}
        />
      ));
      setBeasts(beastsListElement);
    } else {
      setBeasts(fullBeasts);
    }
  }

  return (
    <main>
      <form>
        <label htmlFor="sortSelect">Filter:</label>
        <select name="sortSelect" id="sortSelect" onChange={handleChange}>
          <option value="" hidden>
            Choose a filter
          </option>
          <option value="hornNumber" name="hornNumber">
            Horn Number
          </option>
          <option value="name" name="name">
            Name
          </option>
        </select>
        <label htmlFor="inputValue">Value:</label>
        <input type="text" id="inputValue" name="inputValue" onChange={handleChange}></input>
      </form>
      <div className="beast">
        {showModal && <SelectedBeast description={modalDescription} imageUrl={modalImg} handleModal={handleModal} />}
        {beasts}
      </div>
    </main>
  );
}
