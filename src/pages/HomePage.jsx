import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import './HomePage.css'; // Import the CSS file for styling
import AskQuestions from '../components/AskQuestions';
import Imgtext1 from '../components/Imgtext1';
import Imgtext2 from '../components/Imgtext2';
import Imgtext3 from '../components/Imgtext3';

const HomePage = () => {
    return (
        <div>
            <div className="home-container">


                <h2 className="success-heading">Success stories</h2>
                <p className="success-description">Every success journey<br></br> we've encountered.</p>

                <div className="mid-container">
                    <img src="/images/officegirl.jpg" alt="Office Girl" className="office-image" />
                    <Imgtext1 />
                    <Imgtext2 />
                    <Imgtext3 />



                    <div className="enhance-content">
                        Enhance fortune 50 <br></br>company's insights <br></br> teams research <br></br> capabilities
                        <div className="explore">
                            Explore More &rarr;
                        </div>
                    </div>

                </div>

                {/* Add the Explore More button below the description */}





            </div>
            <div className="large-ask-questions">

                <AskQuestions /> {/* Reuse the AskQuestions component */}

            </div>


            {/* Footer container */}
            <div className="footer-container">
                <p>@ Talup 2023. All rights reserved</p>
                <div className="links">
                    <a href="/">Terms & Conditions</a>
                    <span className="separator"> | </span>
                    <a href="/">Privacy Policy</a>
                </div>
            </div>
        </div>

    );
};

export default HomePage;
