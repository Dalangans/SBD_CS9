import React, { useState, useEffect } from 'react';

const CounterDemo = () => {
    const [count, setCount] = useState(0);

    // useEffect to show an alert when count is divisible by 10
    useEffect(() => {
        if (count !== 0 && count % 10 === 0) {
            alert(`The count ${count} is divisible by 10!`);
        }
    }, [count]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Counter Demo</h1>
            <div className="text-3xl font-semibold mb-4">{count}</div>
            <div className="flex space-x-4">
                <button
                    onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    +
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    -
                </button>
                <button
                    onClick={() => setCount(0)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default CounterDemo;
