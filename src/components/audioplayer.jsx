'use client';
import Image from 'next/image';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        if (isPlaying) {
            document.querySelectorAll('audio')[0].play();
        } else {
            document.querySelectorAll('audio')[0].pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        const ambientAudio = document.getElementById('ambient');
        if (theme === 'dark') {
            ambientAudio.src = '/medias/ambien-night.mp3';
        } else {
            ambientAudio.src = '/medias/genshin-ambient.mp3';
        }
    }, [theme]);

    return (
        <div onClick={() => setIsPlaying(!isPlaying)}>
            <audio autoPlay loop>
                <source src="/medias/genshin.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {isPlaying ? (
                <Image src="/medias/playing.png" alt="Genshin Impact" width={34} height={34} />
            ) : (
                <Image src="/medias/stopped.png" alt="Genshin Impact" width={34} height={34} />
            )}

            {theme === 'dark' ? (
                <audio id="ambient" autoPlay loop>
                    <source src="/medias/ambien-night.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            ) : (
                <audio id="ambient" autoPlay loop>
                    <source src="/medias/genshin-ambient.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
}
