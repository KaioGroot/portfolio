'use client';

import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { Mouse } from 'lucide-react';
import CurriculoButton from '@/components/CurriculoButton';
import { useLanguage } from '@/context/LanguageProvider';

export default function About() {
    const { theme, setTheme } = useContext(ThemeContext);
    const { language } = useLanguage();
    const messages = require(`../../../messages/${language}.json`);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, [theme]);

    //animação de scrolling adicionar o revealing-image nos elementos
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealing-image');
                }
            });
        });

        const elements = document.querySelectorAll('.reveal');
        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    useEffect(() => {
        let movimentando = document.getElementById('movimentando');
        window.addEventListener('mousemove', (e) => {
            movimentando.style.backgroundPosition = `${e.clientX / 100}px ${e.clientY / 100}px, ${e.clientX}px ${e.clientY}px`;
        });
    }, [theme]);

    return (
        <div className="flex justify-between  flex-col py-2  h-screen">
            {theme === 'dark' ? (
                <div
                    id="movimentando"
                    className="fixed z-[-1] inset-0 bg-[length:50px_50px] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)]"
                ></div>
            ) : (
                <div
                    id="movimentando"
                    className="fixed z-[-1] inset-0 bg-[length:50px_50px] bg-[radial-gradient(circle,rgba(25,25,255,0.2)_1px,transparent_2px)]"
                ></div>
            )}

            <div className="absolute z-[-10] inset-0">
                <div className="h-1/5 w-full bg-gradient-to-b from-transparent to-[rgba(38,107,255,0.2)]"></div>
                <div className="h-4/5 w-full bg-gradient-to-t from-transparent to-[rgba(38,107,255,0.2)]"></div>
            </div>
            <div className="z-[-20] absolute inset-20 opacity-20">
                <div className="w-90 h-90 bg-gradient-to-r from-[#0c82f8] to-[#4ca1af]  opacity-50 blur-lg"></div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
                <div className=" w-1/2 h-1/2 flex justify-left items-center">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-6xl font-bold tracking-wide mb-6 text-gray-900 dark:text-white">{messages.about.title}</h1>
                        <CurriculoButton />
                    </div>
                </div>
                <div className=" w-1/2 h-1/2 flex  justify-center items-center">
                    <ol className="relative border-s bg-white:border-gray-200 dark:border-gray-700 flex  flex-col gap-40">
                        {Object.entries(messages.about.timeline).map(([year, content]) => (
                            <li key={year} className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{year}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{content.title}</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400 reveal">{content.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
