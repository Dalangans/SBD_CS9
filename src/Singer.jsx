import React from 'react';
import MilijenkoImage from './assets/Milijenko.jpg';

const Card5 = () => {
    return (
        <div className="bg-[#1a1a1a] text-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={MilijenkoImage}
                alt="Singer"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Singer</h2>
                <p className="text-sm text-gray-400">
                A singer doesn't just use their voice, they express the story behind every note. The voice is the instrument that carries the soul's deepest emotions.
                </p>
            </div>
        </div>
    );
};

export default Card5;
