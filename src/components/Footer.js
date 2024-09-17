import React from 'react';


const Footer = () => {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="footer">
            <div className="container text-center">
                <p>
                    &copy; {currentYear} | Your future apprentice -  
                    <a href="https://www.linkedin.com/in/younes-ayoub-khoya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/UNUSkh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://khoyayounesayoub.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Mon Site Personnel">
                        <i className="fas fa-globe"></i>
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
