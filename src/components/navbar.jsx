'use client';
import { useState, useContext } from 'react';
import { AtivoContext } from '@/context/AtivoProvider';
import { ThemeContext } from '@/context/ThemeProvider';
import { Eclipse, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AudioPlayer from './audioplayer';

export default function Navbar() {
    const router = useRouter();
    const navigation = ['About', 'Projects', 'Contact'];
    const { ativo, setAtivo } = useContext(AtivoContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar px-6 z-20 md:px-20 py-6 md:py-12 flex justify-between items-center bg-gradient-to-tr from-[rgba(38,107,255,0)] to-[#6c757d00] backdrop-blur-xl relative">
            <div id="logo" className="flex gap-2 items-center">
                <AudioPlayer />
                <span className="text-2xl md:text-4xl font-bold tracking-widest">KaiowF.dev</span>
            </div>

            {/* Botão de Menu para Mobile */}
            <button className="md:hidden z-50 p-2 rounded-full hover:bg-gray-500 transition" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Menu */}
            <div
                className={`absolute z-[50]   md:static top-16 right-0 w-full md:w-auto bg-gray-200 md:bg-transparent flex flex-col md:flex-row gap-4 md:gap-6 p-6 md:p-0 items-center transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
                }`}
            >
                {navigation.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-white md:text-foreground hover:underline cursor-pointer transition-all duration-300"
                        onClick={() => {
                            setMenuOpen(false);
                            item === 'Contact' ? setAtivo(!ativo) : setAtivo(false);
                            router.push(`${item.toLowerCase()}`);
                        }}
                    >
                        {item}
                    </a>
                ))}
                <button
                    id="tema"
                    className="bg-transparent rounded-full p-2 hover:bg-gray-500 transition"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    {theme === 'dark' ? (
                        <Eclipse />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-contrast"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 18a6 6 0 0 0 0-12v12z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}
