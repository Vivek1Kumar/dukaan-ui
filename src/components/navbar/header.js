import React, { Component } from 'react';
import './header.css';
import Verify from '../../assests/verify.png';

class header extends Component {
    render() {
        return (
            <div className="header card">
                <div className="super-market">
                    <div className="super">Mano Super Market</div>
                    <div><img className="verify-icon" src={Verify} alt="verify" /></div>
                </div>
                <div className="header-super">
                    <div className="quest">?</div>
                    <div className="header-text">How to use</div>
                </div>
            </div>
        );
    }
}
export default header;