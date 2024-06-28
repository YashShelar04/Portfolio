import React, { useState } from 'react';
import Loading from './Components/Loading.jsx';
// import HomePage from './HomePage'; // Replace with your actual homepage component
import App from './App.jsx';
const Connecting = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleAnimationComplete = () => {
        setIsLoading(false);
    };

    return (
        <div className="App">
            {isLoading && <Loading onAnimationComplete={handleAnimationComplete} />}
            {!isLoading && <App/>}
        </div>
    );
};

export default Connecting;
