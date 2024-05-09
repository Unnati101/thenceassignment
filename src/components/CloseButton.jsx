import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use navigate to redirect to home page
import './CloseButton.css'; // Import the CSS file for styling

const CloseButton = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = () => {
        navigate('/'); // Redirect to the home page
    };

    return (
        <div className="close-button" onClick={handleClick}> {/* Add the click handler */}
            <span>&times;</span> {/* Unicode character for 'X' */}
        </div>
    );
};

export default CloseButton;
