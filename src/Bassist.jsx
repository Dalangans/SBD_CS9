import React from 'react';
import ChristopherTonyWolstenholmeImage from './assets/ChristopherTonyWolstenholme.jpg';

const Card3 = () => {
    return (
        <div className="bg-[#1a1a1a] text-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={ChristopherTonyWolstenholmeImage}
                alt="Bassist"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Bassist</h2>
                <p className="text-sm text-gray-400">
                The bass isn’t just a sound, it’s the heartbeat of the music. It’s the pulse that drives the rhythm, the foundation upon which melodies are built. The bassist is the unsung hero, holding everything together with a groove that makes you move. Whether it’s a subtle thump or a thunderous roar, the bass guitar resonates deep within, connecting us to the very essence of music. It’s not just an instrument; it’s a force that unites us all in harmony.
                </p>
            </div>
        </div>
    );
};

export default Card3;
