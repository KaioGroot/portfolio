'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Github, Instagram, ArrowRight, ChevronDown } from 'lucide-react';
import Theme from '@/action/theme';
import CardContact from '@/components/cardcontact';
import { AtivoContext } from '@/context/AtivoProvider';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import Contact from '@/components/contact';
import { Document, Page } from 'react-pdf';
import ThreeScene from '@/action/threescene';
import { useLanguage } from '@/context/LanguageProvider';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
    let { ativo, setAtivo } = useContext(AtivoContext);
    let { theme, setTheme } = useContext(ThemeContext);
    const { language } = useLanguage();
    const messages = require(`../../messages/${language}.json`);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useEffect(() => {
        let movimentando = document.getElementById('movimentando');
        window.addEventListener('mousemove', (e) => {
            movimentando.style.backgroundPosition = `${e.clientX / 100}px ${e.clientY / 100}px, ${e.clientX}px ${e.clientY}px`;
        });

        // Esconder o indicador de scroll após 3 segundos
        const timer = setTimeout(() => {
            setShowScrollIndicator(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, [theme]);

    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative overflow-hidden">
            <div
                id="movimentando"
                className="fixed z-[-1] inset-0 bg-[length:50px_50px] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] transition-all duration-300"
            ></div>
            <ThreeScene />
            <div className="absolute z-[-10] inset-0">
                <div className="h-1/5 w-full bg-gradient-to-b from-transparent to-[rgba(38,107,255,0.2)]"></div>
                <div className="h-4/5 w-full bg-gradient-to-t from-transparent to-[rgba(38,107,255,0.2)]"></div>
            </div>

            <div className="min-h-screen flex flex-col items-left px-6 sm:px-10 md:px-20 lg:px-40 justify-center gap-8 md:gap-20 bg-transparent text-white">
                <ScrollAnimation animation="fadeInDown">
                    <h1 className="kaio text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        {messages.home.greeting}
                    </h1>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInUp">
                    <p className="text-base sm:text-lg md:text-xl opacity-80 mb-6 text-left max-w-2xl leading-relaxed">{messages.home.description}</p>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInLeft">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/projects"
                            className="group w-full sm:w-auto text-center bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            {messages.home.projects_button}
                        </a>
                        <a
                            href="/about"
                            className="group w-full sm:w-auto text-center bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            {messages.home.cv_button}
                        </a>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInRight">
                    <div className="flex justify-center sm:justify-start gap-4">
                        <a
                            href="https://github.com/KaioGroot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent text-blue-200 p-3 rounded-lg hover:bg-blue-400/20 transition-all duration-300 transform hover:scale-110"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/kaiowdev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent text-blue-200 p-3 rounded-lg hover:bg-blue-400/20 transition-all duration-300 transform hover:scale-110"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>
                </ScrollAnimation>

                {ativo ? <Contact /> : null}

                {showScrollIndicator && (
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                        <p className="text-sm opacity-70">{messages.home.see_more}</p>
                        <ChevronDown size={24} className="opacity-70" />
                    </div>
                )}
            </div>
        </div>
    );
}
