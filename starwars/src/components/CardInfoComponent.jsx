import React from "react";
import "./StarWars.css";

const CardInfo = props => {
  const ifUnknown = propItem => {
    if (propItem === "n/a") {
      return "Unknown";
    } else {
      return propItem;
    }
  };

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div className="card-info">
      <h3>{props.character.name}</h3>
      <h4>Description:</h4>
      <ul>
        <li>
          <span>Height</span>: {props.character.height}
        </li>
        <li>
          <span>Mass</span>: {props.character.mass}
        </li>
        <li>
          <span>Gender</span>: {capitalize(ifUnknown(props.character.gender))}
        </li>
        <li>
          <span>Hair Color</span>:{" "}
          {capitalize(ifUnknown(props.character.hair_color))}
        </li>
        <li>
          <span>Skin Color</span>:{" "}
          {capitalize(ifUnknown(props.character.skin_color))}
        </li>
        <li>
          <span>Eye Color</span>: {capitalize(props.character.eye_color)}
        </li>
        <li>
          <span>Birth Year</span>: {props.character.birth_year}
        </li>
      </ul>
    </div>
  );
};

export default CardInfo;
