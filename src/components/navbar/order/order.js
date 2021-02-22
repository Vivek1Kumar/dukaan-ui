import React from 'react';
import './order.css';
import Icecreame from '../../../assests/ice-cream.png';
import RightArrow from '../../../assests/right-arrow.png';

function order() {
    return (
        <div className="order-card">
            <div className="body-section-one">
                <div className="order-list">
                    <span>Order </span>
                    <span>#281217</span>
                    <button className="new-order">New</button>
                </div>
                <div>Today, 11:11 PM</div>
            </div>
            <div className="body-section-one">
                <div className="item-ice-creame">
                    <div>
                        <img src={Icecreame}  alt="Ice-creame" width="60px" height="60px" />
                    </div>
                    <div className="item-price">
                        <div className="item-one">1item</div>
                        <div className="price">₹79</div>
                    </div>
                </div>
                <div>
                    <button className="details">
                        <span>Details</span>
                        <img className="right-arrow-icon" src={RightArrow} alt="right-arrow-icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default order;
