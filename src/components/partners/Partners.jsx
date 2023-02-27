import React from "react";
import "./Partners.scss";

function Partners() {
  return (
    <div className="partners">
      <div className="partners-content">
        <span className="partners-content__text">Trusted by:</span>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
          alt="facebook"
          className="partners-content__logo"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
          alt="google"
          className="partners-content__logo"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
          alt="netflix"
          className="partners-content__logo"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
          alt="P&G"
          className="partners-content__logo"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
          alt="Paypal"
          className="partners-content__logo"
        />
      </div>
    </div>
  );
}

export default Partners;
