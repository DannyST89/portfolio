import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // You can use any icons from react-icons
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <nav className="bg-dark-600 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-2xl font-semibold">
                    My Website
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden">
                    {isMobileNavOpen ? (
                        <FaTimes
                            className="text-white text-2xl cursor-pointer"
                            onClick={toggleMobileNav}
                        />
                    ) : (
                        <FaBars
                            className="text-white text-2xl cursor-pointer"
                            onClick={toggleMobileNav}
                        />
                    )}
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white hover:underline">
                        Home
                    </a>
                    <a href="#" className="text-white hover:underline">
                        About
                    </a>
                    <a href="#" className="text-white hover:underline">
                        Portfolio
                    </a>
                    <a href="#" className="text-white hover:underline">
                        Contact
                    </a>
                    <a href="#">
                        <DarkModeToggle />
                    </a>
                </div>
            </div>

            {/* Mobile navigation */}
            {isMobileNavOpen && (
                <div className="md:hidden bg-blue-500 py-2">
                    <a href="#" className="block text-white py-2">
                        Home
                    </a>
                    <a href="#" className="block text-white py-2">
                        About
                    </a>
                    <a href="#" className="block text-white py-2">
                        Portfolio
                    </a>
                    <a href="#" className="block text-white py-2">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
