import React from 'react';
import "./list.css";
import Footer from "../../../components/footer/index";
import IMG1 from '../../../assests/store/img-1.png';
import IMGempty from '../../../assests/store/empty.svg';
import RightArrow from "../../../assests/store/right-arrow.png";

function list() {
    return (
        <>
            <div className="header-section">
                <div className="company-info">
                    <div className="logo-wrapper">
                        <img className="" src={IMG1} alt="product" />
                    </div>
                    <div className="company-name">Mano Super Market and the name</div>
                </div>
                <div className="navbar">
                    <ul>
                        <li> Bag </li>
                        <li> Order </li>
                    </ul>
                </div>
            </div>

            <div className="searchbar-container ">
                <input className="searchbar" type="" placeholder="Search for products" />
            </div>

            <div className="grid-container pd-0">

                <div className="best-seller">
                    <ul className="list">
                        <li><a href="/" className="active">Bestsellers (10)</a></li>
                        <li><a href="/">Pizza Specials (21)</a></li>
                        <li><a href="/">Singles Value Combos (311)</a></li>
                        <li><a href="/">Match Combos (191)</a></li>
                        <li><a href="/">Pastas by Firangi Bake (31)</a></li>
                        <li><a href="/">Midnight Sale (59)</a></li>
                        <li><a className="view-all" href="/"><span>View all categories </span><img src={RightArrow} alt="Right-arrow" width='13px' /></a></li>
                    </ul>
                </div>

                <div className="item-list-section">
                    <div className="item-list-wrapper">
                        <div className="item-list-title">
                            <h3>Bestsellers <span className="badge">10</span></h3>
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
                                                <input type="" value="1" />
                                                <button> + </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

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
                                                <input type="" value="1" />
                                                <button> + </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

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
                                                <input type="" value="1" />
                                                <button> + </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                        </ul>
                    </div>
                </div>

                <div className="list-bag-section">
                    <div className="item-list-title">
                        <h3>Bag <span className="badge">0</span></h3>
                    </div>
                    <div className="img-empty-container">
                        <img className="" src={IMGempty} alt="Bages" />
                        <div>Your bag is empty</div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default list;


