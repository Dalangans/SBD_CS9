import React from 'react';
import Navbar from './Navbar';
import CounterDemo from './CounterDemo';
import Card1 from './Guitarist';
import Card2 from './Drummer';
import Card3 from './Bassist';
import Card4 from './Keyboardist';
import Card5 from './Singer';

const App = () => {
    return (
        <div>
            <Navbar />
            <CounterDemo />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 px-4">
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
                <Card5 />
            </div>
        </div>
    );
};

export default App;
