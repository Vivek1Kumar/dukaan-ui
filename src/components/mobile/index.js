import React from 'react';
import Logo from "../../assests/sidebar/logo.png";
import IMG1 from '../../assests/store/img-1.png';
import Store from '../../assests/store/store-img.png';

import TickMark from '../../assests/store/tick-mark.png';
import IceCreamBro from '../../assests/store/ice-creams-bro.png';

import IceCreams from '../../assests/carousel/ice-creams.png'
import HomeFood from '../../assests/carousel/home-food.png'

import BuyerProtection from "../../assests/footer/buyer-protection.png";
import CustomerSupport from "../../assests/footer/customer-support.png";
import Delivery from "../../assests/footer/delivery.png";

import WhatsApp from "../../assests/footer/whatsapp.png";
import GridIcon from "../../assests/footer/grid-icon.png";

import HomeIcon from "../../assests/home-navbar/home.png";
import Bag from "../../assests/home-navbar/bag.png";
import OrderGrid from "../../assests/home-navbar/order-grid.png";

import RightArrow from "../../assests/right-arrow.png";

import './index.css';

function index() {
    return (
        <div className="container">
            <div className="mobile-header">
                <div className="header-wrapper"> 
                <span>Store made with</span> 
                <img className="" alt="logo"  src={Logo}/>
            </div>
                <div>
                    <a className="down-app" target="_blank" rel="noreferrer"  href="https://play.google.com/store/apps/details?id=com.dukaan.app">DOWNLOAD APP</a>
                </div>
            </div>

            <div className="mobile-search">
                <div className="mobile-search-content">
                    <div className="mobile-logo-container">
                        <img className="" src={Store} alt="Store" />
                    </div>
                    <div className="tagline"><h3>Mano Super Market</h3>
                    <span><img className="tick-mark" src={TickMark} alt="tick-mark" />TRUSTED SELLER</span></div>
                </div>
                <div className="mobile-search-content">
                    <input type="text" placeholder="Search for products.."/>
                </div>
            </div>
            <div className="hor-line" />
            <div className="item-list-section mobile">
                <div className="item-list-title">
                    <h3>Bestsellers</h3>
                </div>
                <div className="carousel-container">
                    <div className="product-item">
                        <img src={IceCreams} alt="Ice Creams" />
                        <div className="item-name">Ice Creams</div>
                    </div>
                    <div className="product-item">
                        <img src={HomeFood} alt="Home Food" />
                        <div className="item-name">Home Food</div>
                    </div>
                    <div className="product-item">
                        <img src={IceCreams} alt="Ice Creams"/>
                        <div className="item-name">Ice Creams</div>
                    </div>
                </div>
            </div>

            <div className="item-list-section mobile">
                    <div className="item-list-wrapper">
                        <div className="item-list-title">
                            <h3>Ice Creame <span className="badge">10</span></h3> 
                        </div>
                        <ul className="item-list-container">

                            <li>
                                <div className="item-container">
                                    <div className="img-container">
                                        <img className="img-responsive" alt="product" src={IMG1} />
                                        <span className="badge badge-offer ">30% OFF</span>
                                    </div>
                                    <div className="item-description">
                                        <h3 className="item-title">Kwality Walls Black Currant</h3>
                                        <div className="item-quantity">1 Unit</div>
                                        <div className="item-qty-price">
                                            <div className="">₹99 <span className="discounted-price">₹189</span></div>
                                            <div className="btn-cart-wrapper">
                                                    <button> - </button>
                                                    <input type=""  value="1"/>
                                                    <button> + </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div class="hor-line"></div>
                            <li>
                                <div className="item-container">
                                    <div className="img-container">
                                        <img className="img-responsive" alt="product" src={IceCreams}/>
                                        <span className="badge badge-offer ">30% OFF</span>
                                    </div>
                                    <div className="item-description">
                                        <h3 className="item-title">Kwality Walls Black Currant</h3>
                                        <div className="item-quantity">1 Unit</div>
                                        <div className="item-qty-price">
                                            <div className="">₹99 <span className="discounted-price">₹189</span></div>
                                            <div className="btn-cart-wrapper">
                                                
                                                    <button> - </button>
                                                    <input type=""  value="1"/>
                                                    <button> + </button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <hr />
                            <li>
                                <div className="item-container">
                                    <div className="img-container">
                                        <img className="img-responsive" alt="product" src={IMG1}/>
                                        <span className="badge badge-offer ">30% OFF</span>
                                    </div>
                                    <div className="item-description">
                                        <h3 className="item-title">Kwality Walls Black Currant</h3>
                                        <div className="item-quantity">1 Unit</div>
                                        <div className="item-qty-price">
                                            <div className="">₹99 <span className="discounted-price">₹189</span></div>
                                            <div className="btn-cart-wrapper">
                                                
                                                    <button> - </button>
                                                    <input type=""  value="1"/>
                                                    <button> + </button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <hr />
                            <li>
                                <div className="item-container">
                                    <div className="img-container">
                                        <img className="img-responsive" alt="product" src={IceCreamBro}/>
                                        <span className="badge badge-offer ">30% OFF</span>
                                    </div>
                                    <div className="item-description">
                                        <h3 className="item-title">Kwality Walls Black Currant</h3>
                                        <div className="item-quantity">1 Unit</div>
                                        <div className="item-qty-price">
                                            <div className="">₹99 <span className="discounted-price">₹189</span></div>
                                            <div className="btn-cart-wrapper">
                                                
                                                    <button> - </button>
                                                    <input type=""  value="1"/>
                                                    <button> + </button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-list"><label className="all-product">SEE ALL PRODUCTS<img src={RightArrow} alt="Right arrow" /> </label></div>
                            </li>
                        </ul>
                        <div className="item-list-title">
                            <h3>Ice Creame <span className="badge">1</span></h3> 
                        </div>
                        <ul className="item-list-container">
                            <li>
                                <div className="item-container">
                                    <div className="img-container">
                                        <img className="img-responsive" alt="product" src={IceCreamBro}/>
                                        <span className="badge badge-offer ">30% OFF</span>
                                    </div>
                                    <div className="item-description">
                                        <h3 className="item-title">Kwality Walls Black Currant</h3>
                                        <div className="item-quantity">1 Unit</div>
                                        <div className="item-qty-price">
                                            <div className="">₹99 <span className="discounted-price">₹189</span></div>
                                            <div className="btn-cart-wrapper">
                                                
                                                    <button> - </button>
                                                    <input type=""  value="1"/>
                                                    <button> + </button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-footer" >
                    <div className="mobile-footer-section">
                        <div className="mobile-footer-img">
                            <img src={Delivery} alt="Delivery" />
                            <div>Free <br />Delivery <br /> <span>(above ₹500)</span></div>
                        </div>
                        <div className="mobile-footer-img">
                            <img src={BuyerProtection} alt="Buyer Protection" />
                            <div>Buyer <br/> Protection</div>
                        </div>
                        <div className="mobile-footer-img">
                            <img  src={CustomerSupport} alt="Customer Support" />
                            <div>Customer <br /> Support</div>
                        </div>
                    </div>
                    <div className="footer-main">
                        <hr  className="mobile-border-line"/>
                        <div className="mobile-footer-bottom">
                            <div className="mobile-store-det">STORE DETAILS</div>
                            <div className="mobile-super-market">Mano Super Market</div>
                            <div className="mobile-footer-address">Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru, Karnataka</div>
                        </div>
                        <div className="social-section">
                            <div className="whatsapp"><img src={WhatsApp} alt="Whats App" /></div>
                            <div className="grid-icon"><img src={GridIcon} alt="Grid Icon" /></div>

                        </div>
                    </div>
                </div>
           
            <div className="home-section">
                <div className="mobile-bottom-navbar">
                    <div className="home-item-menu home-select">
                        <img src={HomeIcon} alt="Home Icon" />
                        <div>Home</div>
                    </div>
                    <div className="home-item-menu">
                        <span>3</span>
                        <img src={Bag} alt="Bag" />
                        <div>Bag</div>

                    </div>
                    <div className="home-item-menu">
                        <img src={OrderGrid} alt="Order Grid" />
                        <div>Order</div>
                    </div>
                </div>
            </div>
            <div className="slider-icon">
                <span className="slider" />
            </div>
            <div className="space"></div>
        </div>
    );
}
export default index;