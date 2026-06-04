import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mx = e.clientX; 
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCursor = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const handleMouseEnter = () => {
      dot.style.width = '12px';
      dot.style.height = '12px';
      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.borderColor = 'rgba(124,108,252,0.7)';
    };

    const handleMouseLeave = () => {
      dot.style.width = '8px';
      dot.style.height = '8px';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(124,108,252,0.4)';
    };

    const addHoverEvents = () => {
      document.querySelectorAll('a, button, .skill-card, .project-card, .contact-link').forEach(el => {
        // Prevent duplicate listeners
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });
    
    addHoverEvents();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      document.querySelectorAll('a, button, .skill-card, .project-card, .contact-link').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" id="cursorDot" ref={dotRef}></div>
      <div className="cursor-ring" id="cursorRing" ref={ringRef}></div>
    </>
  );
};

export default CustomCursor;
