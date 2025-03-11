'use client';
import React, { useEffect, useState } from 'react';

export default function MouseFollower() {
    const [lightStyle, setLightStyle] = useState({});

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setLightStyle({
                left: clientX - 100,
                top: clientY - 100,
                background: 'radial-gradient(circle, rgba(255,255,255) 0.024%, transparent 25%)',
                width: 200,
                height: 200,
                position: 'fixed',
                pointerEvents: 'none',
                transition: 'all 0.1s ease',
                borderRadius: '50%',
                zIndex: 9999,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div style={lightStyle}></div>;
}
