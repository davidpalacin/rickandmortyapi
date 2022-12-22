import React from 'react'
import "./CharacterCard.scss"
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


export function CharacterCard({char}) {
  const navigate = useNavigate();

  const selectCharacter = (character) => {
    navigate(`/characters/${character.id}`);
  };

  return (
    <div className="CharacterCard card">
      <img className="card-img-top" src={char.image} alt='imagen del personaje {char.name}' />
      <div className="card-body text-center">
        <h5 className="card-title">{char.name}</h5>
        <button onClick={()=>selectCharacter(char)} className="btn btn-primary">
          Ver detalles
        </button>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {};
