'use client';
import { useEffect } from 'react';

export default function GenshinAlbum() {
    useEffect(() => {
        const album = document.getElementById('album');
    }, []);
    return (
        <div>
            <iframe
                id="album"
                src="https://open.spotify.com/embed/track/6MZoXnbjDE2VgUWeMJgrrn?utm_source=generator?autoplay=1"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    );
}
