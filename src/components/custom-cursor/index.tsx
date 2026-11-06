"use client"

import React, { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    // The glow layer is pointer-events-none so it can't block clicks, which
    // also means it never receives mouse events itself: listen on window.
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  // Nothing to show until the mouse moves, so touch devices never get a glow.
  if (!position) return null;

  return (
    <div
      className='fixed inset-0 pointer-events-none'
      style={{ background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }}
    />
  );
};

export default CustomCursor;
