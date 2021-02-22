import React from 'react';
import './footerTop.css';

import BuyerProtection from "../../assests/footer/buyer-protection.png";
import CustomerSupport from "../../assests/footer/customer-support.png";
import Delivery from "../../assests/footer/delivery.png";

function footerTop() {
    return (
        <>
        <div className="footer-section">
            <div className="footer-img">
                <img src={Delivery} alt="Delivery" />
                <div>Free Delivery (above ₹500)</div>
            </div>
            <div className="footer-img">
                <img src={BuyerProtection} alt="Buyer Protection" />
                <div>Buyer Protection</div>
            </div>
            <div className="footer-img">
                <img  src={CustomerSupport} alt="Customer Support"/>
                <div>Customer Support</div>
            </div>
        </div>
        </>
    );
}

export default footerTop;
