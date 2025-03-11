'use client';
import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Instagram, ArrowRight } from 'lucide-react';
import Theme from '@/action/theme';
import { ThemeContext } from '@/context/ThemeProvider';
import ThreeScene from '@/action/threescene';
import GenshinAlbum from '@/action/genshinalbum';

const techs = ['Todos', 'React', 'Next.js', 'TailwindCSS', 'MuxPlayer', 'Stripe', 'PHP', 'Python'];

export default function Projects() {
    Theme();
    const [projects, setProjects] = useState([]); // null para evitar renderização inicial errada
    const [activeTech, setActiveTech] = useState('Todos');
    const { theme, setTheme } = useContext(ThemeContext);
    useEffect(() => {
        fetch('/api/projetos')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data.projects);
                console.log(data.projects);
            });
    }, []);

    if (!projects) {
        return <p className="text-center text-white">Carregando projetos...</p>;
    }

    const filteredProjects = activeTech === 'Todos' ? projects : projects.filter((p) => p.technologies.includes(activeTech));

    return (
        <div className="relative overflow-hidden min-h-screen flex flex-col items-left px-20 justify-center gap-10 bg-transparent text-white">
            <ThreeScene />
            <div className="absolute z-[-10] inset-y-0 inset-x-60">
                <h1 className="text-[12rem] font-serif font-extrabold opacity-5 rotate-90" style={{ transformOrigin: 'left top' }}>
                    projects
                </h1>
            </div>
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

            <div className="flex gap-4 px-4 py-5 rounded-3xl backdrop-blur-sm bg-gradient-to-tr from-[rgba(147,201,252,0.17)] to-[rgba(10,127,236,0)] overflow-hidden animate__animated animate__backInLeft">
                {techs.map((tech) => (
                    <button
                        key={tech}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                            activeTech === tech ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                        }`}
                        onClick={() => setActiveTech(tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            {theme === 'dark' ? (
                <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3  w-full gap-8 transition-all duration-1000">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gradient-to-tr from-[rgba(7,135,255,0.49)] to-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition"
                        >
                            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                            <p className="text-sm opacity-80 mb-4">
                                Tecnologia: {project.technologies + '\n'}
                                <br />
                                <br />
                            </p>
                            <p className="text-sm opacity-80 mb-4">Descrição: {project.description + '\n'}</p>

                            <a
                                href={project.repo}
                                target="_blank"
                                className="bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition flex items-center gap-2"
                            >
                                Ver Código <Github size={18} />
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid sm:grid-cols-1  md:grid-cols-3 w-full gap-8 transition-all duration-1000">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gradient-to-tr from-[#9fe2e77e] to-gray-200 p-6 rounded-lg shadow-lg hover:scale-105 transition"
                        >
                            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                            <p className="text-sm opacity-80 mb-4">
                                Tecnologia: {project.technologies + '\n'}
                                <br />
                            </p>
                            <br />
                            <p className="text-sm opacity-80 mb-4">Descrição: {project.description + '\n'}</p>
                            <a
                                href={project.repo}
                                target="_blank"
                                className="bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition flex items-center gap-2"
                            >
                                Ver Código <Github size={18} />
                            </a>
                        </div>
                    ))}
                </div>
            )}

            <div className="absolute flex gap-4 justify-between bottom-10 text-sm">
                <p>Veja mais sobre mim</p>
                <div className="animate__animated animate__flash animate__infinite">
                    <ArrowRight />
                </div>
            </div>
        </div>
    );
}
