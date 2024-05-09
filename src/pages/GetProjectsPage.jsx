import React, { useState, useEffect } from 'react';
import CloseButton from '../components/CloseButton'; // Import the close button component
import SuccessScreen from '../components/SuccessScreen'; // Import the SuccessScreen component
import './GetProjectsPage.css'; // Import CSS for styling
import Logo from '../assets/logo.png'

const GetProjectsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const [emailError, setEmailError] = useState(''); // State for email error message
    const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
            if (!emailPattern.test(value)) {
                setEmailError('Please enter a valid email address.');
            } else {
                setEmailError(''); // Clear error if valid
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (emailError || !formData.name || !formData.email) {
            return; // Don't submit if there's an error or missing data
        }
        setIsSubmitted(true); // Indicate form submission
    };

    if (isSubmitted) {
        return <SuccessScreen />; // Render the success screen upon submission
    }

    return (
        <div className="form-full-page">
            <CloseButton /> {/* Close button */}
           <img className='company-heading'src={Logo}/>
            <h1 className="registration-heading">Registration Form</h1> {/* Heading */}
            <p className="description-text">Start your success<br></br> Journey here!</p> {/* Description */}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                  
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                   
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {emailError && <p className="error-message">{emailError}</p>} {/* Error message */}
                </div>
                <button
                    className="submit-button"
                    type="submit"
                    disabled={!formData.name || !formData.email || emailError}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default GetProjectsPage;
