import React from 'react';
import './index.css';

import Logo from '../../../assests/sidebar/logo.png'
import Home from '../../../assests/sidebar/home.png'
import Order from '../../../assests/sidebar/svg/icons_navbar_orders_inactive.svg'

import Products from '../../../assests/sidebar/products.png'
import Marketing from '../../../assests/sidebar/marketing.png'
import Account from '../../../assests/sidebar/user.png'


function index() {
    return (
        <div>
            <div className="sidenav">
                <div className="logo-container">
                    <img className="img-responsive" src={Logo} alt='dukaan'/>
                </div>
                <a className="active" href="/">
                    <div className="side-list">
                        <div className="icon-container"><img src={Home} alt='dukaan'/></div>
                        <div>Home</div>
                    </div>
                 </a>
                <a href="/">
                    <div className="side-list">
                        <div className="icon-container"><img src={Order} alt='Order'/></div>
                        <div className="bage">
                            <div>Order</div>
                            <span className="total-bage">2</span>
                        </div>
                    </div>
                </a>
                <a href="/">
                    <div className="side-list">
                        <div className="icon-container"><img src={Products} alt='Products'/></div>
                        <div>Products</div>
                    </div>
                </a>
                <a href="/">
                    <div className="side-list">
                        <div className="icon-container"><img src={Marketing} alt='Marketing'/></div>
                        <div>Marketing</div>
                    </div>
                </a>
                <a href="/">
                    <div className="side-list">
                        <div className="icon-container"><img src={Account} alt='Account'/></div>
                        <div>Account</div>
                    </div>
                </a>
                <div className="chat-help">
                    <div className="help">Need any help?</div>
                    <div className="chat">Chat with us</div>

                </div>

            </div>
        </div>
    );
}

export default index;
