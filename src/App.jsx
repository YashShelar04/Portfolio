import React, { useRef } from 'react';
import './CSS/App.css';
import 'animate.css';
import Navbar from './Components/Navbar.jsx';
import signature from './assets/signature.svg';
import profile from './assets/profileImage.png.png';
import name from './assets/IamYashShelar.png';
import skills from './assets/skills.png';
import about from './assets/about.svg';

function App() {
    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const sendEmail = () => {
        const recipient = 'ydshelar04@gmail.com';
        const subject = encodeURIComponent('Feedback/Suggestion');
        const body = encodeURIComponent('Hello,\n\nI would like to suggest the following:\n\n');

        window.open(`mailto:${recipient}?subject=${subject}&body=${body}`);
    };

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }} className="headClass">
                <img src={signature} alt="signature" className="logo" style={{ width: 'auto', height: '100px' }} />
                <Navbar />
                <div
                    style={{
                        fontFamily: 'Familjen Grostek, sans-serif',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginRight: '10vw', // Pushes "About" to the right
                    }}
                    onClick={scrollToAbout}
                >
                    About
                </div>
            </div>
            <img src={name} alt="name" className="name" style={{ position: 'absolute', left: '10%', top: '20vh', maxWidth: '30%' }} />
            <img src={skills} alt="skills" className="skills" style={{ position: 'absolute', left: '20%', top: '50vh', maxWidth: '30%' }} />
            <img
                src={profile}
                alt="profileImage"
                className="profileImage"
                style={{ height: '70vh',width:"25vw", maxWidth: '30vw', position: 'absolute', right: '10%', top: '-40vh', transition: 'top 1s ease-in-out' }}
            />
            <button
                style={{
                    height: '8vh',
                    width: '30vw',
                    fontSize: '1.5rem',
                    borderRadius: '30px',
                    // border: 'none',
                    position: 'absolute',
                    left: '5%',
                    fontFamily: 'Familjen Grostek, sans-serif',
                    fontWeight: 'bold',
                    color: 'black',
                    backgroundColor: 'white',
                    zIndex: '1000',
                    cursor: 'pointer',
                    top:"92vh"
                }}
                onClick={sendEmail}
            >
                Want to suggest something?
            </button>
            <div ref={aboutRef} style={{ position: 'absolute', top: '95vh',bottom:"0vh", width: '100%', textAlign: 'center' }}>
                <img src={about} alt="about" style={{ maxWidth: '100vw' }} />
            </div>
        </div>
    );
}

export default App;
