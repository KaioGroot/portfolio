'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import CardContact from './cardcontact';

export default function Contato() {
    return (
        <div
            id="cardz"
            className=" fixed  flex justify-center items-center  inset-0 bg-gradient-to-tr from-[#041136fb] to-[#0000004f]  backdrop-blur-md z-[100]"
        >
            <button
                className="btn bg-red-400 btn-circle btn-sm absolute "
                onClick={() => document.querySelector('#cardz').classList.toggle('hidden')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <CardContact />
        </div>
    );
}
