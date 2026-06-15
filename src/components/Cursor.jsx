import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isFinePointer, setIsFinePointer] = useState(true);
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');

    const updatePointerState = () => {
      setIsFinePointer(!mediaQuery.matches);
    };

    updatePointerState();
    mediaQuery.addEventListener('change', updatePointerState);

    if (!mediaQuery.matches) {
      document.body.classList.add('cursor-hidden');
    }

    const moveCursor = (event) => {
      if (!isFinePointer) return;

      const { clientX, clientY } = event;

      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
        dotRef.current.style.opacity = '1';
      }

      if (ringRef.current) {
        ringPos.current = { x: clientX, y: clientY };
        ringRef.current.style.opacity = '1';
      }
    };

    const hideCursor = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const showCursor = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    // Animation loop for ring lerp
    const animateRing = () => {
      if (ringRef.current && ringPos.current.x !== 0) {
        const rect = ringRef.current.getBoundingClientRect();
        const currentX = parseFloat(ringRef.current.style.left || '0');
        const currentY = parseFloat(ringRef.current.style.top || '0');
        
        const diffX = ringPos.current.x - currentX;
        const diffY = ringPos.current.y - currentY;
        
        ringRef.current.style.left = `${currentX + diffX * 0.12}px`;
        ringRef.current.style.top = `${currentY + diffY * 0.12}px`;
      }
      requestAnimationFrame(animateRing);
    };

    const animationId = requestAnimationFrame(animateRing);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('mouseenter', showCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('mouseenter', showCursor);
      mediaQuery.removeEventListener('change', updatePointerState);
      document.body.classList.remove('cursor-hidden');
      cancelAnimationFrame(animationId);
      hideCursor();
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] opacity-0 transition-opacity duration-150"
        style={{
          width: 8,
          height: 8,
          borderRadius: 9999,
          background: '#2dd4bf',
          boxShadow: '0 0 14px 4px rgba(45,212,191,0.6)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] opacity-0 transition-opacity duration-150"
        style={{
          width: 32,
          height: 32,
          borderRadius: 9999,
          border: '1px solid rgba(45,212,191,0.45)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}