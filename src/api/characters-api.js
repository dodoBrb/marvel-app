// getCharacters qui retourne la liste des personnages

// getCharacterById qui retourne un personnage en fonction de son id en récupérant les données du fichier characters.json

import characters from '../data/characters.json';

export function getCharacters () {
    return characters;
};

export function getCharacterById (id) {    
    return characters.find(character => character.id === id);
};

