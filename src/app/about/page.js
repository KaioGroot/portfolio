'use client';

import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { Mouse } from 'lucide-react';
export default function About() {
    let { theme, setTheme } = useContext(ThemeContext);

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
                    <h1 className="text-6xl font-bold tracking-wide mb-6 text-gray-900 dark:text-white">Sobre mim</h1>
                </div>
                <div className=" w-1/2 h-1/2 flex  justify-center items-center">
                    <ol className="relative border-s bg-white:border-gray-200 dark:border-gray-700 flex  flex-col gap-40">
                        <li className="mb-10 ms-4 ">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">O Início</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 reveal">
                                Bom, com mais ou menos 13 anos de idade eu comecei a perceber sobre o mundo digital, eu entrava em um site pensava:
                                ok, como um site é feito? como que funcionam as coisas por trás dos panos?, então eu me deparei com aquele nome que
                                você conhece: Curso Em Video!, isso mesmo a partir daí comecei estudando HTML5 e CSS3.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            >
                                Learn more{' '}
                                <svg
                                    className="w-3 h-3 ms-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-200 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Melhora do Aprendizado</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400 reveal">
                                em 2021 eu já tinha uma básica noção de como funcionava, eu criava páginas bem simples mesmo, eu via uma foto e
                                tentava replicar e daí fui evoluindo, também eu tentava fazer projetos sem ver vídeos no youtube, isso dificultou
                                bastante mas também me ajudou muito por conta de aprender sozinho
                            </p>
                        </li>
                        <li className="ms-4 ">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-200 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">O Contato</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400 reveal">
                                bom, aqui é batizado como: O Contado, por conta do meu primeiro contato com javacsript, lembro como se fosse ontem,
                                sempre super empolgado em sempre aprender, daí fui solucionando problemas básicos de programação. e minhas práticas
                                com HTML e CSS estávam bem legais, eu conseguia replicar qualquer tipo de site, bom, claro que não tão funcionais por
                                ser simples, mas eu conseguia.
                            </p>
                        </li>
                        <li className="ms-4 ">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-200 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Atirando para outros lados</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400 reveal">
                                Aqui foi um ano que eu não fiquei tão focado em javascript, eu também atirei pro php!, e foi muito irado! eu consegui
                                fazer um site que fazia cadastro e login em um joguinho que funcionava no meu computador, pois os bancos de dados dele
                                eram em sql, daí foi mais fácil de fazer, mas claro, foi um desafio, eu nem sabia nada de php.
                            </p>
                        </li>
                        <li className="ms-4 ">
                            <div className="absolute w-3 h-3  bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-200 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Atirando para outros lados</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Bom, no ano de 2024 eu consegui pegar um pc novo, e então eu consegui melhorar minhas habilidades com algumas
                                tecnologias mais modernas como, ReactJS, bom eu estudei por alguns meses com essa tecnologia, e eu consegui aprender
                                muito com ela, assim como outros conhecimentos como TailwindCSS, Animate.css Scroll Driven e outros.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
