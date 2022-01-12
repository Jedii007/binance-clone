import React from "react";
import btc from "../assets/btc.jpg";
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
                                <h2>BND/BUSD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div> 
                            <p>1.17%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1>304.48</h1>
                        <p>$304.41</p>
                    </div>
                </div>

                   <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src={btc} alt="btc" />
                            <div>
                                <h2>BND/BUSD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div> 
                            <p>1.17%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1>304.48</h1>
                        <p>$304.41</p>
                    </div>
                </div>

                   <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src={btc} alt="btc" />
                            <div>
                                <h2>BND/BUSD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div> 
                            <p>1.17%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1>304.48</h1>
                        <p>$304.41</p>
                    </div>
                </div>

                   <div className="grid_comp">
                    <div className="comp_top">
                        <div className="comp_top_head">
                            <img src={btc} alt="btc" />
                            <div>
                                <h2>BND/BUSD</h2>
                                <p>Volume 7,03,35,229,734 BUSD</p>
                            </div> 
                            <p>1.17%</p>
                        </div>
                    </div>
                    <div className="comp_middle">
                        <h1>304.48</h1>
                        <p>$304.41</p>
                    </div>
                </div>


            </div>
            <div className="cover_bottom">

            </div>

        </div>
    )
}
export default CoverComp;