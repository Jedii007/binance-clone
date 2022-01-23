import React from 'react';
import logo from "../assets/logo.jpg";
import "../App.css";

const ProductComp = () => {
    return (
        <div className="blog_comp">

            <div className="blog_header">
                <h1>A Full Suite Of Services</h1>
                <p>Learn how to start trading cryptocurrency .</p>

                <div className="blog_filter">
                    <button>Spot</button>
                    <button className="bg_color">USD-Futures</button>
                    <button className="bg_color">Savings</button>
                    <button className="bg_color">Staking</button>
                    <button className="bg_color">Binance Launchpad</button>
                </div>
            </div>

            <div className="pro_grid">
                <div className="pro_grid_comp">
                    <h1>Trade. Anywhere.</h1>
                    <p> Compatible with multiple devices, 
                    start trading with safety and convenience.</p>
                </div>
                <div className="pro_grid_comp">
                    <img src={logo} alt="logo"/>
                    <p>Compatible with multiple devices</p>
                </div>
            </div>
        </div>
        
    )
}

export default ProductComp;