import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animatedLogo from '../assets/animated-logo.json';

const Preloader = ({ onComplete }) => {
    const container = useRef(null);

    useEffect(() => {
        if (container.current) {
            const anim = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: animatedLogo,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            });

            anim.addEventListener('complete', onComplete);

            // Cleanup
            return () => {
                anim.destroy();
            };
        }
    }, [onComplete]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
        >
            <div ref={container} style={{ width: '80%', maxWidth: '600px', height: '100%' }} />
        </div>
    );
};

export default Preloader;
