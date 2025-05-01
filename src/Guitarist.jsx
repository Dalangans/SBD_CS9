import React from 'react';
import BrianMayImage from './assets/BrianMay.jpg';

const Card1 = () => {
    return (
        <div className="bg-[#1a1a1a] text-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={BrianMayImage}
                alt="Guitarist"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Guitarist</h2>
                <p className="text-sm text-gray-400">
                The guitar is the instrument that can tell the story without a single word. It can express the deepest emotions, from joy to sorrow, and everything in between. The guitarist is the storyteller, weaving melodies that resonate with the soul. Whether it's a gentle strum or a powerful riff, the guitar has the power to captivate and inspire. It's not just an instrument; it's a voice that speaks to the heart of every listener.
                </p>
            </div>
        </div>
    );
};

export default Card1;
