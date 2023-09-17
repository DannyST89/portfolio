import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // You can use any icons from react-icons
import { Link } from 'react-scroll';
const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
    };
    return (
        <nav className="bg-dark-600 pt-4 fixed z-10 top-0 bg-slate-100">
            <div className="relative container mx-auto grid grid-cols-5 items-center justify-between ">
                <div className="text-2xl font-semibold col-span-1">
                    My Portfolio
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden absolute top-8 right-5">
                    {isMobileNavOpen ? (
                        <FaTimes
                            className=" text-2xl cursor-pointer"
                            onClick={toggleMobileNav}
                        />
                    ) : (
                        <FaBars
                            className=" text-2xl cursor-pointer"
                            onClick={toggleMobileNav}
                        />
                    )}
                </div>

                {/* Desktop navigation */}
                <div className="col-span-4 hidden md:flex space-x-4 w-full">
                    <div className="grid grid-cols-5  w-full">
                        <div className="flex justify-between content-center py col-span-3">
                            <div className="">
                                <Link
                                    className="text-dark hover:underline"
                                    activeClass="active"
                                    to="hero"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="text-dark hover:underline"
                                >
                                    About
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    activeClass="active"
                                    to="jobs"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="text-dark hover:underline"
                                >
                                    Proyects
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="text-white hover:underline"
                                >
                                    Skills
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="text-white hover:underline"
                                >
                                    Expirience
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="text-white hover:underline"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                        <div className="col-span-2 flex justify-center content-center"></div>
                    </div>
                </div>
            </div>

            {/* Mobile navigation */}
            {isMobileNavOpen && (
                <div className="md:hidden bg-dark-600 py-2">
                    <Link
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="block  py-2"
                        onClick={closeMobileNav}
                    >
                        Home
                    </Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="block  py-2"
                        onClick={closeMobileNav}
                    >
                        About
                    </Link>
                    <Link
                        activeClass="active"
                        to="jobs"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="block  py-2"
                        onClick={closeMobileNav}
                    >
                        Projects
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="block  py-2"
                        onClick={closeMobileNav}
                    >
                        Skills
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="block  py-2"
                        onClick={closeMobileNav}
                    >
                        Expirience
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="block  py-2"
                        onClick={closeMobileNav}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
