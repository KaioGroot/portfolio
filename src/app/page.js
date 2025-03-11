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

export default function Home() {
    let { ativo, setAtivo } = useContext(AtivoContext);
    let { theme, setTheme } = useContext(ThemeContext);

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

            <div className="min-h-screen flex flex-col items-left px-40 justify-center gap-20 bg-transparent text-white">
                <h1 className="kaio text-6xl font-bold mb-4">Olá, Me Chamo Kaio Ferreira</h1>
                <p className="text-xl opacity-80 mb-6 text-left max-w-2xl animate__animated animate__fadeInDown duration-[2323s]">
                    sou um desenvolvedor front-end apaixonado por criar experiências de usuário incríveis e intuitivas. Meu foco é em construir
                    interfaces modernas e responsivas usando as mais recentes tecnologias web.
                </p>

                <div className="flex gap-4 animate__animated animate__fadeInDown">
                    <a href="#projects" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                        Meus Projetos
                    </a>
                    <a href="#contact" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                        Currículo
                    </a>
                </div>
                <div className="flex gap-0 animate__animated animate__backInLeft">
                    <a
                        href="https://github.com/KaioGroot"
                        className="bg-transparent text-blue-200 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com/kaiowdev/"
                        className="bg-transparent text-blue-200 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition"
                    >
                        <Instagram size={24} />
                    </a>
                </div>
                {ativo ? <Contact /> : null}

                <div className="absolute flex gap-4 justify-between bottom-10 text-sm">
                    <p>Veja Mais sobre mim</p>
                    <div className="animate__animated animate__flash animate__infinite ">
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
}
