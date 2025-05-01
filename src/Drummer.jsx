import React from 'react';
import JoeyJordisonImage from './assets/JoeyJordison.webp';

const Card2 = () => {
    return (
        <div className="bg-[#1a1a1a] text-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={JoeyJordisonImage}
                alt="Drummer"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Drummer</h2>
                <p className="text-sm text-gray-400">
                Drums are more than just beats; they are the pulse that brings music to life. The drummer is the heartbeat of the band, setting the tempo and driving the energy. With every strike of the drum, they create a rhythm that resonates deep within us. From the thunderous roar of a rock anthem to the subtle brush of a jazz ballad, the drums tell a story that words cannot express. They are the foundation upon which melodies are built, and the heartbeat that unites us all in the joy of music.
                </p>
            </div>
        </div>
    );
};

export default Card2;
