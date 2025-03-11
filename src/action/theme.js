'use client';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext, useEffect } from 'react';
export default function Theme() {
    const { theme, setTheme } = useContext(ThemeContext);
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, [theme]);
}
