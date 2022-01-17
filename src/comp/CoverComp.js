import React from "react";
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";
import bnb from "../assets/bnb.png";
import ada from "../assets/ada.png";
import arrowR from "../assets/arrowR.png";
import graph from "../assets/graph.png";
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
                    <div className="comp_bottom">
                        <img src={arrowR} alt="arrowR"/>
                    </div>
                </div>
                    
                   <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src={bnb} alt="bnb"/>
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
                    <div className="comp_bottom">
                        <img src={arrowR} alt="arrowR"/>
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
                    <div className="comp_bottom">
                        <img src={arrowR} alt="arrowR"/>
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
                    <div className="comp_bottom">
                        <img src={arrowR} alt="arrowR"/>
                    </div>
                </div>


            </div>
            <div className="cover_bottom">
                <h1>Market trend</h1>

                <div className="price_table">
                    <div className="price_header">
                        <div className="name">
                            <p>Name</p>
                        </div>
                        <div className="name">
                            <p>Last Price</p>
                        </div>
                        <div className="name">
                            <p>24h Change</p>
                        </div>
                        <div className="name">
                            <p>Markets</p>
                        </div>
                        <div className="name">
                            <p>Buy</p>
                        </div>
                    </div>

                    <div className="price_header">
                        <div className="coin_data">
                            <img src={btc} alt="btc"/>
                            <h2>BTC</h2>
                            <p> BTC</p>
                        </div>
                        <div className="coin_data">
                            <h3>$301.63</h3>
                        </div>
                        <div className="coin_data">
                            <h4>0.003</h4>
                        </div>
                        <div className="coin_data_graph">
                            <img src={graph} alt="graph"/>
                        </div>
                        <div className="coin_data">
                            <button>Buy</button>
                        </div>
                    </div>

                    <div className="price_header">
                        <div className="coin_data">
                            <img src={eth} alt="eth"/>
                            <h2>ETH</h2>
                            <p> ETH</p>
                        </div>
                        <div className="coin_data">
                            <h3>$301.63</h3>
                        </div>
                        <div className="coin_data">
                            <h4>0.003</h4>
                        </div>
                        <div className="coin_data_graph">
                            <img src={graph} alt="graph"/>
                        </div>
                        <div className="coin_data">
                            <button>Buy</button>
                        </div>
                    </div>

                    <div className="price_header">
                        <div className="coin_data">
                            <img src={bnb} alt="bnb"/>
                            <h2>BNB</h2>
                            <p> BNB</p>
                        </div>
                        <div className="coin_data">
                            <h3>$301.63</h3>
                        </div>
                        <div className="coin_data">
                            <h4>0.003</h4>
                        </div>
                        <div className="coin_data_graph">
                            <img src={graph} alt="graph"/>
                        </div>
                        <div className="coin_data">
                            <button>Buy</button>
                        </div>
                    </div>

                    <div className="price_header">
                        <div className="coin_data">
                            <img src={ada} alt="ada"/>
                            <h2>ADA</h2>
                            <p>ADA</p>
                        </div>
                        <div className="coin_data">
                            <h3>$301.63</h3>
                        </div>
                        <div className="coin_data">
                            <h4>0.003</h4>
                        </div>
                        <div className="coin_data_graph">
                            <img src={graph} alt="graph"/>
                        </div>
                        <div className="coin_data">
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_line">
                <h2>View More Markets</h2>
                <p>dfdljrfsjkdkrfgjkdfgsbkfdjgsdjklgsljkdfgblsjdfgbsjkdfgbnlk</p>
            </div>

        </div>
    )
}
export default CoverComp;