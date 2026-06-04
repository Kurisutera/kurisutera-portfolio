import { useEffect } from 'react';

export function useScrollReveal() {
    useEffect(() => {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    const bar = e.target.querySelector('.skill-bar');
                    if (bar) bar.style.width = bar.dataset.level + '%';
                    revealObserver.unobserve(e.target);
                }
            });
        }, { threshold: 0.15 });

        const tlObserver = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    tlObserver.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });

        const timeoutId = setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
            document.querySelectorAll('.timeline-item').forEach((el, i) => {
                el.style.transitionDelay = `${i * 0.1}s`;
                tlObserver.observe(el);
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            revealObserver.disconnect();
            tlObserver.disconnect();
        };
    }, []);
}
