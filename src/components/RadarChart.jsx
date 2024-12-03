import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';

const CompareRadarChart = ({ character1, character2 }) => {
    if (!character1 || !character2) return null;

    // Transformation des données pour correspondre au format attendu
    const data = Object.entries(character1.capacities).map(([key, value]) => ({
        subject: key,
        [character1.name]: value,
        [character2.name]: character2.capacities[key],
    }));

    return (
        <RadarChart outerRadius={200} width={800} height={600} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
            <Radar
                name={character1.name}
                dataKey={character1.name}
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
            <Radar
                name={character2.name}
                dataKey={character2.name}
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
            />
            <Legend />
        </RadarChart>
    );
};

export default CompareRadarChart;
