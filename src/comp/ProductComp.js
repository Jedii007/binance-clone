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
     
            <div className="blog_grid">
                <div className="pro_grid_comp">
                    <h1>Trade. Anywhere.</h1>
                    <p> Am increasing at contrasted in favourable he considered astonished. 
                    As if made held in an shot. By it enough to valley desire do. 
                    Mrs chief great maids these which are ham match she. Abode to tried do thing maids.
                    Doubtful disposed returned rejoiced to dashwood is so up.</p>
                    <button>Binance Launchpad</button>
                </div>
             
            <div className="pro_grid_comp">
                <img src={logo} alt="logo"/>
            </div>
            </div>
        </div>
        
    )
}

export default ProductComp;