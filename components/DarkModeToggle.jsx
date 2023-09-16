// components/DarkModeToggle.js
import React from 'react';
import { useTheme } from 'next-themes';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="text-black-500 dark:text-gray-300 b">
            {theme === 'dark' ? (
                <MdOutlineLightMode
                    onClick={() => setTheme('light')}
                    className="cursor-pointer"
                    size={24}
                />
            ) : (
                <MdOutlineDarkMode
                    onClick={() => setTheme('dark')}
                    className="cursor-pointer"
                    size={24}
                />
            )}
        </div>
    );
};

export default DarkModeToggle;
