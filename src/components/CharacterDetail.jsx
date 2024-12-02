import React from 'react';
import { format } from 'date-fns';

const CharacterDetail = ({ character }) => {
    const { description, thumbnail, modified } = character;

    // Convertir la date de modification en un format lisible
    const formattedDate = modified ? format(new Date(modified), 'MMM d, yyyy') : "No modification date available.";

    return (
        <div>
            {thumbnail && (
                <img
                    src={`${thumbnail.path}/standard_large.${thumbnail.extension}`}
                    alt={character.name}
                />
            )}
            <p>{description || "No description available."}</p>
            <p>{formattedDate}</p>
        </div>
    );
};

export default CharacterDetail;