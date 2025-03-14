'use client';
import { useState, useContext, useEffect } from 'react';
import { AtivoContext } from '@/context/AtivoProvider';
import { ThemeContext } from '@/context/ThemeProvider';
import { Eclipse, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AudioPlayer from './audioplayer';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/context/LanguageProvider';

export default function Navbar() {
    const router = useRouter();
    const navigation = ['About', 'Projects', 'Contact'];
    const { ativo, setAtivo } = useContext(AtivoContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const { language } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    const messages = require(`../../messages/${language}.json`);

    // Fechar o menu quando a tela for redimensionada para desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Impedir o scroll quando o menu mobile estiver aberto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            {/* Overlay para o menu mobile */}
            {menuOpen && <div className="fixed inset-0 bg-black/90 backdrop-blur-xl md:hidden" onClick={() => setMenuOpen(false)} />}

            <div className="navbar px-4 sm:px-6 md:px-20 py-4 md:py-6 flex justify-between items-center bg-gradient-to-tr from-background/80 to-background/6 backdrop-blur-xl  border-border/40">
                <div id="logo" className="flex gap-2 items-center relative z-50">
                    <div className="flex gap-2 items-center cursor-pointer" onClick={() => router.push('/')}>
                        <AudioPlayer />
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest">KaiowF.dev</span>
                    </div>
                </div>

                {/* Botão de Menu para Mobile */}
                <button
                    className="md:hidden z-50 p-2 rounded-full hover:bg-gray-500/20 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Menu de Navegação */}
                <div
                    className={`fixed md:static inset-y-20 right-0 w-[75%] sm:w-[60%] md:w-auto 
                    flex flex-col md:flex-row  items-start md:items-center gap-6 md:gap-8
                    p-4 md:p-0md:bg-transparent
                    transition-all duration-300 ease-in-out transform
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                    ${menuOpen ? 'shadow-2xl md:shadow-none' : ''}
                    md:flex z-40`}
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                        {navigation.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-foreground/90 hover:text-foreground text-base font-medium hover:underline decoration-2 underline-offset-4 cursor-pointer transition-all"
                                onClick={() => {
                                    setMenuOpen(false);
                                    item === 'Contact' ? setAtivo(!ativo) : setAtivo(false);
                                    router.push(`${item.toLowerCase()}`);
                                }}
                            >
                                {messages.nav[item.toLowerCase()]}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto md:mt-0">
                        <LanguageSelector />
                        <button
                            id="tema"
                            className="bg-transparent rounded-full p-2 hover:bg-gray-500/20 transition-colors"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
                        >
                            {theme === 'dark' ? (
                                <Eclipse className="w-5 h-5" />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
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
            </div>
        </nav>
    );
}
