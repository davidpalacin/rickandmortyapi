import React from "react"; //Podemos dejar este import pero hoy día no es necesario
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RickMortyService } from "../../services/RickMortyService";
import "./CharacterDetail.scss";

export function CharacterDetail() {
  const { id } = useParams();
  const [character, setcharacter] = useState({});

  useEffect(() => {
    RickMortyService.getSingleCharacter(id).then((res) => {
      setcharacter(res.data);
    });
  }, []);

  return (
    <div className="CharacterDetail">
      <h1>Character Detail in id: {character.id}</h1>
      <p>{character.name}</p>
      <p>{character.status}</p>
    </div>
  );
}
