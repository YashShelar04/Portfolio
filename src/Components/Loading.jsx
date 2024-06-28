import React, { useEffect, useState } from 'react';
import '../CSS/Loading.css'; // Import your CSS file for styling

const Loading = ({ onAnimationComplete }) => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        // Simulate animation completion after 3 seconds
        const timeoutId = setTimeout(() => {
            setAnimationComplete(true);
            onAnimationComplete(); // Notify parent component that animation is complete
        }, 1000); // 3000ms = 3 seconds

        // Cleanup: clear timeout when component unmounts
        return () => {
            clearTimeout(timeoutId);
        };
    }, [onAnimationComplete]);

    return (
        <div className={`loading ${animationComplete? 'animation-complete' : ''}`}>
            <div className={`square ${animationComplete? 'caleDown' : ''}`}></div>
        </div>
    );
};

export default Loading;