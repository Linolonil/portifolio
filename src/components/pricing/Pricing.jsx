import React from "react";
import "./pricing.css";
import Image1 from '../../assets/price-1.svg'
import Image2 from '../../assets/price-2.svg'
import Image3 from '../../assets/price-3.svg'

const Pricing = () => {
  return(
    <section className="pricing container section">
      <h2 className="section_title">Pricing Plans</h2>
      <div className="pricing_container grid">
        <div className="pricing_item">
          <img src={Image1} alt="" className="pricing_img" />
          <h3 className="pricing_plan">Basic</h3>
          <p className="pricing_title">A simples option but poweful to manage your business</p>
          <p className="pricing_support">Email support</p>
          <h3 className="price">
            <em>$</em>9 <span>Month</span>
          </h3>
          <a href="#" className="btn">Get Starterd</a>
        </div>

        <div className="pricing_item best">
          <span className="badge">Recommended</span>
          <img src={Image2} alt="" className="pricing_img" />
          <h3 className="pricing_plan">Premium</h3>
          <p className="pricing_title">unlimited product including app itegration and more features</p>
          <p className="pricing_support">Mon-fri support</p>
          <h3 className="price">
            <em>$</em> 15 <span>Month</span>
          </h3>
          <a href="#" className="btn">Get Starterd</a>
        </div>

        <div className="pricing_item">
          <img src={Image3} alt="" className="pricing_img" />
          <h3 className="pricing_plan">Ultimate</h3>
          <p className="pricing_title">a wise option for large companies and individuals</p>
          <p className="pricing_support">24/07</p>
          <h3 className="price">
            <em>$</em>19 <span>Month</span>
          </h3>
          <a href="#" className="btn">Get Starterd</a>
        </div>
      </div>
    </section>
  )
};

export default Pricing;
