import React from 'react';
import "./Footer.css";

const Footer = () => (
    <footer className = "footer">
        <div className = "bottom">
            This is a very necessarry footer <img alt = "react" src = {`${process.env.PUBLIC_URL}/images/favicon.ico`} />
        </div>
    </footer>
);

export default Footer;