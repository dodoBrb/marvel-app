import React, { useState } from 'react';
import CompareRadarChart from '../components/RadarChart';
import charactersData from '../data/characters.json';

const CompareCharactersPage = () => {
    document.title = "Compare | Marvel App";

    const [characters] = useState(charactersData);
    const [option1, setOption1] = useState(0);
    const [option2, setOption2] = useState(1);

    const character1 = characters[option1];
    const character2 = characters[option2];

    return (
        <>
            <h2>Compare Characters</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <select
                    value={option1}
                    onChange={(e) => setOption1(Number(e.target.value))}
                    style={{ marginRight: '10px' }}
                >
                    {characters.map((character, index) => (
                        <option key={character.id} value={index}>
                            {character.name}
                        </option>
                    ))}
                </select>
                with
                <select
                    value={option2}
                    onChange={(e) => setOption2(Number(e.target.value))}
                    style={{ marginLeft: '10px' }}
                >
                    {characters.map((character, index) => (
                        <option key={character.id} value={index}>
                            {character.name}
                        </option>
                    ))}
                </select>
            </div>
            <CompareRadarChart character1={character1} character2={character2} />
        </>
    );
};

export default CompareCharactersPage;
