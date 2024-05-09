import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessScreen.css'; // Import the CSS for styling
import Logo from '../assets/logo.png'

const SuccessScreen = () => {
    const navigate = useNavigate(); // For navigation
    const [countdown, setCountdown] = useState(5); // Countdown timer starting at 5 seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1); // Decrement the countdown
        }, 1000); // Update every second

        if (countdown === 0) {
            navigate('/'); // Redirect to the home page when countdown reaches 0
        }

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, [countdown, navigate]); // Dependency array includes countdown and navigate

    return (
        <div className="success-container">
            
            <div className="check-circle">
                &#10003; {/* Unicode for check mark */}
            </div>
            <img className='company-heading' src={Logo} />
            <p className="success-text">Success submitted</p> {/* Success message */}
            <h1 className="congratulations-heading">Congratulations</h1> {/* Heading */}
            <p className="additional-text">
                Your request has been successfully submitted to us.<br></br> We will validate your information and reach out to you<br></br> shortly with updates.
            </p>
            <p className="redirect-message">
                Redirecting you to the homepage in{' '}
                <span className="countdown">
                    {countdown}
                </span>{' '}
                {countdown === 1 ? 'second' : 'seconds'}
            </p> {/* Countdown display */}
        </div>
    );
};

export default SuccessScreen;
