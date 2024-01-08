"use client"

import React, { useState, MouseEvent } from 'react';

interface Position {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const updateCursorPosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className='inset-0 transition duration-300 lg:absolute pointer-events-none fixed'
      style={{ background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }}
      onMouseMove={(e: MouseEvent) => updateCursorPosition(e)}
    />
  );
};

export default CustomCursor;
