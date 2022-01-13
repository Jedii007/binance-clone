import React from "react";
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";
import bnb from "../assets/bnb.png";
import ada from "../assets/ada.png";
import "../App.css";

const CoverComp = () => {
    return (
        <div className="cover">
            <div className="cover_top">
                <h1>Invest With Us</h1>
                <p>Join one of the worlds biggest crypto investors.</p>
                <button className="yellow_button">Get Started</button>
            </div>

            <div className="cover_middle cover_grid">
                <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src={btc} alt="btc" />
                            <div>
                                <h2>BTC/USD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div> 
                            <p>2.68%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1 className="color_green">43.673,44</h1>
                        <p>$43.673,000</p>
                    </div>
                </div>

                   <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src={bnb} alt="bnb" />
                            <div>
                                <h2>BNB/USD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div> 
                            <p>1.17%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1 className="color_red">304.48</h1>
                        <p>$304.41</p>
                    </div>
                </div>

                   <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src={eth} alt="eth" />
                            <div>
                                <h2>ETH/USD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div> 
                            <p>1.17%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1 className="color_green">304.48</h1>
                        <p>$304.41</p>
                    </div>
                </div>

                   <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src={ada} alt="ada" />
                            <div>
                                <h2>ADA/USD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div> 
                            <p>1.17%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1 className="color_red">304.48</h1>
                        <p>$304.41</p>
                    </div>
                </div>


            </div>
            <div className="cover_bottom">
                <h1>Join Our Community</h1>
            </div>

        </div>
    )
}
export default CoverComp;