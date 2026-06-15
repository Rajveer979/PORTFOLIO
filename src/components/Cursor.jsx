import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isFinePointer, setIsFinePointer] = useState(true);

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
        ringRef.current.style.left = `${clientX}px`;
        ringRef.current.style.top = `${clientY}px`;
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

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('mouseenter', showCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('mouseenter', showCursor);
      mediaQuery.removeEventListener('change', updatePointerState);
      document.body.classList.remove('cursor-hidden');
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
          background: '#a5f2f3',
          boxShadow: '0 0 14px 4px rgba(165,242,243,0.6)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] opacity-0 transition-opacity duration-150"
        style={{
          width: 34,
          height: 34,
          borderRadius: 9999,
          border: '1px solid rgba(165,242,243,0.45)',
          transform: 'translate(-50%, -50%)',
          transition: 'left .15s cubic-bezier(.25,.8,.25,1), top .15s cubic-bezier(.25,.8,.25,1), opacity .15s ease',
        }}
      />
    </>
  );
}
