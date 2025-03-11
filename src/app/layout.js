'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import MouseFollower from '@/components/mouse';
import { AtivoProvider } from '@/context/AtivoProvider';
import ThemeProvider from '@/context/ThemeProvider';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </head>

            <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
                <ThemeProvider>
                    <AtivoProvider>
                        <Navbar />
                        {children}
                        <MouseFollower />
                    </AtivoProvider>
                </ThemeProvider>
                <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
            </body>
        </html>
    );
}
