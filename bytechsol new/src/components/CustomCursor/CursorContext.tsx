import React, { createContext, useContext, useState, type ReactNode } from 'react';

type CursorContextType = {
    cursorColor: string;
    setCursorColor: (color: string) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Default blue/tech color
    const [cursorColor, setCursorColor] = useState('#289ed8');

    return (
        <CursorContext.Provider value={{ cursorColor, setCursorColor }}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursorColor = () => {
    const context = useContext(CursorContext);
    if (!context) {
        throw new Error("useCursorColor must be used within a CursorProvider");
    }
    return context;
};
