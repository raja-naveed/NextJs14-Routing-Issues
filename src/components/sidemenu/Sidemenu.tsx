import Link from 'next/link';
import React from 'react';
import { FaTachometerAlt, FaProjectDiagram, FaServicestack, FaBuilding, FaBlog, FaUsers, FaCog } from 'react-icons/fa';

const SideMenu = () => {
    return (
        <div className="bg-gray-900 min-h-screen w-64 flex flex-col">
            <div className="p-6 text-white flex items-center">
                <img src="images/logo-dark.png" alt="Logo" className="w-12 h-12 mr-2" />
                <span className="text-2xl font-semibold">Ahmed Masroor</span>
            </div>
            <nav className="mt-6 flex-1">
                <Link href={`admin`} className="flex items-center py-3 px-6 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">
                    <FaTachometerAlt className="mr-3" />
                    Dashboard
                </Link>
                <Link href={`project`} className="flex items-center py-3 px-6 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">
                    <FaProjectDiagram className="mr-3" />
                    Projects
                </Link>
                <Link href={`services`} className="flex items-center py-3 px-6 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">
                    <FaServicestack className="mr-3" />
                    Services
                </Link>
                <Link href={`startups`} className="flex items-center py-3 px-6 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">
                    <FaBuilding className="mr-3" />
                    Startups
                </Link>
                <Link href={`blog`} className="flex items-center py-3 px-6 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">
                    <FaBlog className="mr-3" />
                    Blog Posts
                </Link>
                <Link href={`team`} className="flex items-center py-3 px-6 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">
                    <FaUsers className="mr-3" />
                    Team Members
                </Link>
                <Link href={`settings`} className="flex items-center py-3 px-6 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">
                    <FaCog className="mr-3" />
                    Settings
                </Link>
            </nav>
        </div>
    );
};

export default SideMenu;
