import React from 'react';
import './header.css';
import Logo from "../../../assests/sidebar/logo.png";
function header() {
    return (
        <div className="store-header"> 
            <div className="store-container">
                <div className="store-made">
                    <div>Store made with</div>
                    <img src={Logo} alt="Logo" />
                </div>
                <a className="down-app" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.dukaan.app"><div >DOWNLOAD APP</div></a>
            </div>
        </div>
    );
}

export default header;