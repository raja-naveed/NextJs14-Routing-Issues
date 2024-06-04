"use client"
import React, { useState } from 'react';
import { FaUser, FaSun, FaMoon, FaExpand, FaCompress } from 'react-icons/fa';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const toggleFullScreen = () => {
        if (!isFullScreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className="bg-gray-900 p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-2xl font-bold">Wellcome in my Space</div>
                <div className="flex items-center">
                    <button onClick={toggleTheme} className="text-white mx-2 focus:outline-none">
                        {isDarkMode ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
                    </button>
                    <button onClick={toggleFullScreen} className="text-white mx-2 focus:outline-none">
                        {isFullScreen ? <FaCompress className="w-6 h-6" /> : <FaExpand className="w-6 h-6" />}
                    </button>
                    <div className="relative">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-white mx-2 focus:outline-none flex items-center">
                            <img src="images/sir.png" alt="User" className="w-10 h-10 rounded-full mr-2" />
                            <span> Raja Naveed </span>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all divide-purple-300">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
