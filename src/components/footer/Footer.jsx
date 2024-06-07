import React from "react";
import "./Footer.scss";

function Footer() {
  const footerSections = [
    {
      title: "Categories",
      items: [
        "Boats & RVs",
        "Camping & Outdoor Gear",
        "Water Sports Equipment",
        "Local Art",
        "Adventure Tours",
        "Lifestyle",
        "Photography",
        "Fishing Equipment",
        "Hiking & Camping Gear",
        "Outdoor Clothing",
        "Island Tours",
      ],
    },
    {
      title: "About",
      items: [
        "Our Story",
        "Local Partnerships",
        "Privacy Policy",
        "Terms of Service",
        "Contact Us",
      ],
    },
    {
      title: "Support",
      items: [
        "Help & Assistance",
        "Trust & Safety",
        "Selling on Island Marketplace",
        "Buying on Island Marketplace",
      ],
    },
    {
      title: "Regions",
      items: [
        "North Vancouver Island",
        "Central Vancouver Island",
        "South Vancouver Island",
        "Pacific Rim (West Coast Vancouver Island)",
        "Greater Victoria",
        "Gulf Islands & Discovery Islands",
        "Sunshine Coast",
      ],
    },
    {
      title: "More From Island Marketplace",
      items: [
        "Island Marketplace Pro",
        "Island Marketplace Guides",
        "Get Inspired",
        "Island Marketplace Select",
        "Island Marketplace Workspace",
        "Island Marketplace Learning Hub",
      ],
    },
  ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer__top">
          {footerSections.map((section, index) => (
            <div className="footer__topItem" key={index}>
              <h2 className="footer__topItem__header">{section.title}</h2>
              {section.items.map((item, itemIndex) => (
                <span key={itemIndex}>{item}</span>
              ))}
            </div>
          ))}
        </div>
        <hr />
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <h2>Island Marketplace</h2>
            <span>© Island Marketplace Ltd. 2023</span>
          </div>
          <div className="footer__bottom-right">
            <div className="footer__bottom-right__social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="footer__bottom-right__link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="footer__bottom-right__link">
              <img src="/img/coin.png" alt="" />
              <span>CAD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
