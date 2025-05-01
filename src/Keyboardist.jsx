import React from 'react';
import FreddieMercuryImage from './assets/FreddieMercury.jpg';

const Card4 = () => {
    return (
        <div className="bg-[#1a1a1a] text-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={FreddieMercuryImage}
                alt="Keyboardist"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Keyboardist</h2>
                <p className="text-sm text-gray-400">
                A keyboardist paints music with a thousand colors, each key a new shade of emotion. The piano is their canvas, and the melodies they create are masterpieces that resonate with the soul. From the delicate touch of a ballad to the thunderous chords of a rock anthem, the keyboardist brings harmony to life. They are the architects of sound, building bridges between genres and creating a symphony that unites us all. With every note, they tell a story that transcends words, inviting us to feel, to dream, and to dance in the magic of music.
                </p>
            </div>
        </div>
    );
};

export default Card4;
