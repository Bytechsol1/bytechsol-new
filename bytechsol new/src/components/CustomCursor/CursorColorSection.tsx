import React, { ReactNode } from 'react';
import { useCursorColor } from './CursorContext';

interface CursorColorSectionProps {
    color: string;
    children: ReactNode;
    className?: string; // Allow passing standard className
}

const CursorColorSection: React.FC<CursorColorSectionProps> = ({ color, children, className }) => {
    const { setCursorColor } = useCursorColor();

    return (
        <div
            className={className}
            onMouseEnter={() => setCursorColor(color)}
            onMouseLeave={() => setCursorColor('#289ed8')} // Reset to default blue
        >
            {children}
        </div>
    );
};

export default CursorColorSection;
