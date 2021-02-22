import React from 'react';
import FooterBottom from "./footerBottom";
import FooterTop from "./footerTop";

import './footerTop.css';

function index(props) {
    return (
        <div className="footer-bar">
            <FooterTop />
            <FooterBottom />
        </div>
    );
}

export default index;