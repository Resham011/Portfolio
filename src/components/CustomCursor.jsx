import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    if ('ontouchstart' in window) { setIsTouchDevice(true); return; }
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => { if (e.target.closest('a, button, [data-interactive]')) setIsHovering(true); };
    const handleMouseOut = (e) => { if (e.target.closest('a, button, [data-interactive]')) setIsHovering(false); };
    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
  if (isTouchDevice) return null;
  return (
    <div className={`hidden lg:block fixed pointer-events-none z-50 transition-transform duration-200 ease-out`} style={{ left: `${position.x}px`, top: `${position.y}px`, transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}` }}>
      <div className={`w-8 h-8 rounded-full border-2 border-light-accent dark:border-dark-accent transition-all duration-300`}></div>
    </div>
  );
};

export default CustomCursor;