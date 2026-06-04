import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    let animationFrameId;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COLORS = ['rgba(124,108,252,', 'rgba(61,214,245,', 'rgba(176,109,255,'];

    class Particle {
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.r = Math.random() * 1.8 + 0.4;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.5 + 0.1;
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    const drawParticles = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();
      });

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,108,252,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };
    drawParticles();

    // Gradient Blobs
    const blob1 = document.createElement('div');
    blob1.className = 'blobFloat1';
    blob1.style.cssText = `
      position:fixed; top:10%; left:15%; width:500px; height:500px;
      border-radius:50%; pointer-events:none; z-index:-1;
      background: radial-gradient(circle, rgba(124,108,252,0.08), transparent 70%);
      filter: blur(60px); animation: blobFloat1 12s ease-in-out infinite;
    `;
    const blob2 = document.createElement('div');
    blob2.className = 'blobFloat2';
    blob2.style.cssText = `
      position:fixed; bottom:20%; right:10%; width:400px; height:400px;
      border-radius:50%; pointer-events:none; z-index:-1;
      background: radial-gradient(circle, rgba(61,214,245,0.07), transparent 70%);
      filter: blur(50px); animation: blobFloat2 15s ease-in-out infinite;
    `;
    document.body.appendChild(blob1);
    document.body.appendChild(blob2);

    const style = document.createElement('style');
    style.id = 'blobAnimations';
    style.textContent = `
      @keyframes blobFloat1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -40px) scale(1.05); }
        66% { transform: translate(-20px, 20px) scale(0.95); }
      }
      @keyframes blobFloat2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(-40px, 30px) scale(1.08); }
        66% { transform: translate(25px, -25px) scale(0.93); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      if (document.body.contains(blob1)) document.body.removeChild(blob1);
      if (document.body.contains(blob2)) document.body.removeChild(blob2);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return <canvas id="bgCanvas" ref={canvasRef}></canvas>;
};

export default Background;
