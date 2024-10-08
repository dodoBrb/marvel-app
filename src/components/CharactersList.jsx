import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link de react-router-dom

export function CharactersList({ characters = [] }) {
  return (
    <ul id="characters">
      {characters.map((character) => (
        <li key={character.id}>
          <h2>
            <Link to={`/character/${character.id}`}> {/* Utiliser Link pour naviguer vers la page de détail */}
              {character.name}
            </Link>
          </h2>
        </li>
      ))}
    </ul>
  );
}
