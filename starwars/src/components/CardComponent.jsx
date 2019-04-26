import React from "react";
import CardInfo from "./CardInfoComponent";
import "./StarWars.css";

const Card = props => {
  return (
    <div className="cards">
      {props.characters.map(character => (
        <div className="card">
          <CardInfo key={character.created} character={character} />
        </div>
      ))}
    </div>
  );
};

export default Card;
