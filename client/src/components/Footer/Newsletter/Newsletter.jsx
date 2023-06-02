import "./Newsletter.scss";

import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa'

const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">NEWSLETTER</span>
            <span className="big-text">SIGN UP FOR LATEST UPDATES AND OFFERS</span>
            <div className="form">
                <input type="email" placeholder="Email Address" />
                <button className="btn">Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with our Privacy Policy</div>
            <div className="social-icons">
                <div className="icon">
                <FaInstagram/>

                </div>
                <div className="icon">
                <FaLinkedinIn/>

                </div>
                <div className="icon">

                <FaTwitter/>
                </div>
                <div className="icon">
                <FaFacebookF/>

                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
