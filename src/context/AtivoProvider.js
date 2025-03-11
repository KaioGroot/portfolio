'use client';
import { createContext, useState } from 'react';

// Criando o contexto
export const AtivoContext = createContext(); // <-- Aqui está o contexto correto

export function AtivoProvider({ children }) {
    const [ativo, setAtivo] = useState(false);

    return <AtivoContext.Provider value={{ ativo, setAtivo }}>{children}</AtivoContext.Provider>;
}
