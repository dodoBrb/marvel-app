function getCharacters() {
    fetch('http://localhost:5500/src/data/characters.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            console.log("Liste des personnages :");
            data.forEach(character => {
                console.log(`ID: ${character.id}, Nom: ${character.name}`);
            });
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}

getCharacters();
