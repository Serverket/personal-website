import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from './themeC';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="fixed md:right-12 right-1 md:top-9 top-1 lg:right-16 lg:top-11 z-30">
            <div className="transition duration-500 ease-in-out rounded-full">
            {theme === 'dark' ? (
                    <HiSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-green-500 text-2xl cursor-pointer"
                    />
            ) : (
                    <HiMoon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-900 text-2xl cursor-pointer"
                    />
                )}
            </div>
        </div>
    );
};

export default Toggle;