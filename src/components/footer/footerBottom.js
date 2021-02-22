import React from 'react';
import './footerBottom.css';

function footerBottom(props) {
    return (
        <div className="footer-main">
            <hr  className="border-line"/>
            <div className="footer-bottom">
                <div className="store-det">STORE DETAILS</div>
                <div className="super-market">Mano Super Market</div>
                <div className="footer-address">Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru, Karnataka</div>
            </div>
        </div>
    );
}

export default footerBottom;