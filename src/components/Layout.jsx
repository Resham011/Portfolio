import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen relative">
            <AnimatedBackground />
            <CustomCursor />
            {children}
        </div>
    );
};

export default Layout;