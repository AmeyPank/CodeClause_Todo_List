import React from 'react';
import "./footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">
                &copy; {new Date().getFullYear()} Todo List by Amey. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
