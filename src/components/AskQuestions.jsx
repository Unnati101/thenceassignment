import React, { useState } from 'react';
import './AskQuestions.css'; // Import CSS for styling
import '@fortawesome/fontawesome-free/css/all.min.css';


const AskQuestions = () => {
    const [expanded, setExpanded] = useState({
        freelancers: false,
        guarantee: false,
        multipleTalents: false,
        agency: false,
        rightSkillset: false,
    });

    const toggleExpanded = (question) => {
        setExpanded((prevState) => ({
            ...prevState,
            [question]: !prevState[question], // Toggle the state
        }));
    };

    return (
        <div className="ask-questions-container"> {/* Parent container */}
            {/* Transparent arrow */}
            <div className="arrow" /> {/* Insert the transparent arrow */}
            <div className="what">
                what's on your mind
            </div>
            <h2 className="faq-heading">Ask Questions</h2>

            <div className="icon-wrapper">
                <i className="fa-light fa-circle-up-right"></i> {/* Font Awesome up-right arrow icon */}
            </div>

            {/* Question 1 */}
            <div className="question" onClick={() => toggleExpanded('freelancers')}>
                <span>Do you offer freelancers?</span>
                <span className="toggle-sign">{expanded.freelancers ? '-' : '+'}</span>
            </div>
            {expanded.freelancers && <hr className="divider" />} {/* Divider */}

            {/* Question 2 */}
            <div className="question" onClick={() => toggleExpanded('guarantee')}>
                <span>What's the guarantee that I will be satisfied with the hired talent?</span>
                <span className="toggle-sign">{expanded.guarantee ? '-' : '+'}</span>
            </div>
            {expanded.guarantee && <hr className="divider" />} {/* Divider */}

            {/* Question 3 */}
            <div className="question" onClick={() => toggleExpanded('multipleTalents')}>
                <span>Can I hire multiple talents at once?</span>
                <span className="toggle-sign">{expanded.multipleTalents ? '-' : '+'}</span>
            </div>
            {expanded.multipleTalents && <hr className="divider" />} {/* Divider */}

            {/* Question 4 */}
            <div className="question" onClick={() => toggleExpanded('agency')}>
                <span>Why should I not go to an agency directly?</span>
                <span className="toggle-sign">{expanded.agency ? '-' : '+'}</span>
            </div>
            {expanded.agency && <hr className="divider" />} {/* Divider */}

            {/* Question 5 */}
            <div className="question" onClick={() => toggleExpanded('rightSkillset')}>
                <span>Who can help me pick the right skillset and duration?</span>
                <span className="toggle-sign">{expanded.rightSkillset ? '-' : '+'}</span>
            </div>
        </div>
    );
};

export default AskQuestions;
