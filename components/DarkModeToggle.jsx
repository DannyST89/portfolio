// components/DarkModeToggle.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { toggleDarkMode } from '@/src/store/slices/darkModeSlice';

const DarkModeToggle = () => {
    const isDarkMode = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <div className="text-gray-500 dark:text-gray-300">
            {isDarkMode ? (
                <MdOutlineLightMode
                    onClick={handleToggle}
                    className="cursor-pointer"
                    size={24}
                />
            ) : (
                <MdOutlineDarkMode
                    onClick={handleToggle}
                    className="cursor-pointer"
                    size={24}
                />
            )}
        </div>
    );
};

export default DarkModeToggle;
