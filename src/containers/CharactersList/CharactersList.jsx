import React from "react"; //Podemos dejar este import pero hoy día no es necesario
import { useState, useEffect } from "react";
import { RickMortyService } from "../../services/RickMortyService";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import "./CharactersList.scss";

export function CharactersList() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    getAllCharacters();
  }, []);

  //functions
  const getAllCharacters = async () => {
    try {
      const res = await RickMortyService.getAllCharacters(1);
      setCharacter(res.data.results);
      console.log(characters)
    } catch (error) {
      console.log(error.message || error);
    }
  };

  return (
    <>
      <h1 className="CharactersListTitle">Rick & Morty</h1>
      <div className="CharactersList">
        {characters.length > 0 &&
          characters.map((char) => <CharacterCard key={char.id} char={char} />)}
      </div>
    </>
  );
}
