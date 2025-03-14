'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Github, Instagram, ArrowRight } from 'lucide-react';
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

    useEffect(() => {
        let movimentando = document.getElementById('movimentando');
        window.addEventListener('mousemove', (e) => {
            movimentando.style.backgroundPosition = `${e.clientX / 100}px ${e.clientY / 100}px, ${e.clientX}px ${e.clientY}px`;
        });
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

    return (
        <div className="relative overflow-hidden">
            <div
                id="movimentando"
                className="fixed z-[-1] inset-0 bg-[length:50px_50px] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)]"
            ></div>
            <ThreeScene />
            <div className="absolute z-[-10] inset-0">
                <div className="h-1/5 w-full bg-gradient-to-b from-transparent to-[rgba(38,107,255,0.2)]"></div>
                <div className="h-4/5 w-full bg-gradient-to-t from-transparent to-[rgba(38,107,255,0.2)]"></div>
            </div>

            <div className="min-h-screen flex flex-col items-left px-6 sm:px-10 md:px-20 lg:px-40 justify-center gap-8 md:gap-20 bg-transparent text-white">
                <ScrollAnimation animation="fadeInDown">
                    <h1 className="kaio text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{messages.home.greeting}</h1>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInUp">
                    <p className="text-base sm:text-lg md:text-xl opacity-80 mb-6 text-left max-w-2xl">{messages.home.description}</p>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInLeft">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto text-center bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
                        >
                            {messages.home.projects_button}
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto text-center bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
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
                            className="bg-transparent text-blue-200 p-3 rounded-lg hover:bg-blue-400 transition"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/kaiowdev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent text-blue-200 p-3 rounded-lg hover:bg-blue-400 transition"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>
                </ScrollAnimation>

                {ativo ? <Contact /> : null}

                <div className="hidden md:flex absolute gap-4 justify-between bottom-10 text-sm">
                    <p>{messages.home.see_more}</p>
                    <div className="animate__animated animate__flash animate__infinite">
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
}
