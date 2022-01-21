import React from 'react';
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
                    <h1>Trade seamlessly with our Spot</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum vulputate nulla sit amet ante dictum egestas. 
                    Etiam ultricies, erat sit amet bibendum tristique, velit elit tristique nisi, 
                    a tincidunt erat mauris non tortor. Duis ut nisi diam. Maecenas eu elementum ipsum, 
                    eu rutrum lectus.</p>
                </div>
            </div>
        </div>
        
    )
}

export default ProductComp;