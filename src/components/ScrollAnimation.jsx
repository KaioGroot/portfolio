'use client';

import { useEffect, useRef } from 'react';

export default function ScrollAnimation({ children, animation = 'fadeInUp', delay = 0 }) {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', `animate__${animation}`);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [animation]);

    return (
        <div ref={elementRef} className="opacity-0" style={{ animationDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}
