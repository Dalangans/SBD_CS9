import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#1a1a1a] text-white font-infoma w-full fixed top-0 left-0 z-50 shadow-lg">
            <div className="flex justify-between items-center py-4 px-6">
                {/* Name */}
                <div className="text-xl font-bold">Nabiel Utomo</div>
                {/* Menu Items */}
                <ul className="flex space-x-6">
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="hover:text-gray-400 cursor-pointer">Profile</li>
                    <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
