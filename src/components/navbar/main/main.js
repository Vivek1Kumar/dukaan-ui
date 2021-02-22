import React from 'react';
import Header from '../header';
import './main.css';
import Order from '../order/order';

import DownArrow from '../../../assests/downarrow.png'
import RightArrow from '../../../assests/right-arrow.png'


import WhatsApp from '../../../assests/social/whatsapp.png';
import Facebook from '../../../assests/social/facebook.png';
import Twitter from '../../../assests/social/twitter.png';

function main() {
    return (
        <div>
            <div className="main-header"><Header /></div>
            <div className="main">
                <div className="body-section-one">
                    <div className="store-link">Share Store Link</div>
                    <button className="last-month">Last Month <img src = {DownArrow} alt="down-arrow" /> </button>
                </div>

                <div className="grid-container">
                    <div className="item1">
                        <div className="card">
                        	<div>
		                    Your customers can visit your online store <br/> and place the orders from this link.
		                </div>
		                <div className="share-link">
		                    <a href='/' target="_blank" >mydukaan.io/manosupermarket</a>
		                </div>
		                <div>
		                    <div className="share-via">Share via</div>
		                    <div className="social-link">
		                        <a href="/" target="_blank">
		                            <img src={WhatsApp}  alt="Whatsapp" />
		                        </a>
		                        <a href="/" target="_blank">
		                            <img src={Facebook}  alt="Facebook" />
		                        </a>
		                        <a href="/" target="_blank">
		                            <img src={Twitter}  alt="Twitter" />
		                        </a>
		                    </div>
		                </div>
                        </div>
                    </div>
                    <div className="item2">
                        <div className="card">
                            <div className="orders">ORDERS</div>
                            <div className="total-orders">192</div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="orders">STORE VIEWS</div>
                            <div className="total-orders">96</div>
                        </div>
                    </div>
                    <div className="item3">
                        <div className="card">
                            <div className="orders">TOTAL SALES</div>
                            <div className="total-orders">₹1,55,920</div>
                        </div>
                        <br />

                        <div className="card">
                            <div className="orders">PRODUCT VIEWS</div>
                            <div className="total-orders">2,313</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="body-section-one active-order">
                        <div className="at-order">Active Orders</div>
                        <div className="view-all">View All <img src = {RightArrow} alt="right-arrow"  width="12px" height="13px"/></div>
                    </div>
                    <div className="items">
                        <button>Pending (12)</button>
                        <button className="accept">Accepted (33)</button>
                        <button className="accept">Shipped (121)</button>
                    </div>
                </div>
                <div className="body-section-one">
                    <Order />
                    <Order />
                    <Order />
                </div>
                <div className="body-section-one">
                    <Order />
                    <Order />
                    <Order />
                </div>
            </div>
        </div>
    );
}

export default main;
