import React from "react";
import btc from "../assets/btc.png";
import bnb from "../assets/bnb.png";
import ada from "../assets/ada.png";

const BlogComp = () => {
    return (
        <div className="blog_comp">

            <div className="blog_header">
                <h1>Getting Started</h1>
                <p>Learn how to start trading cryptocurrency .</p>

                <div className="blog_filter">
                    <button>Buy Crypto</button>
                    <button className="bg_color">Learn About cryptocurrency</button>
                    <button className="bg_color">Binance Trade</button>
                    <button className="bg_color">Binance Earn</button>
                </div>
            </div>

            <div className="blog_grid">

                <div className="grid_comp">
                    <img src={btc} alt="btc"/>
                    <p>Buy Crypto Today</p>
                </div>
                <div className="grid_comp">
                    <img src={bnb} alt="bnb"/>
                    <p>What is p2p trading</p>
                </div>
                <div className="grid_comp">
                    <img src={ada} alt="ada"/>
                    <p>Buy and transfer Crypto via Us</p>
                </div>
            </div>
        </div>
    )
}

export default BlogComp;