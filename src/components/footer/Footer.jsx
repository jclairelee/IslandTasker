import React from "react";
import "./Footer.scss";

function Footer() {
  const footerSections = [
    {
      title: "Services",
      items: [
        "Cleaning",
        "Childcare",
        "Yard Work",
        "Home Maintenance",
        "Pet Care",
        "Senior Care",
        "Event Planning",
        "Personal Assistant",
        "Handyman Services",
        "Home Renovation",
        "Transportation",
      ],
    },
    {
      title: "About",
      items: [
        "Our Story",
        "How It Works",
        "Terms of Service",
        "Privacy Policy",
        "Contact Us",
      ],
    },
    {
      title: "Support",
      items: ["Help Center", "FAQs", "Trust & Safety", "Contact Support"],
    },
    {
      title: "Locations",
      items: [
        "Urban Areas",
        "Suburban Areas",
        "Rural Areas",
        "Remote Locations",
        "International Services",
      ],
    },
    {
      title: "More Services",
      items: [
        "Specialized Tasks",
        "Emergency Services",
        "Custom Requests",
        "Subscription Plans",
        "Tasker Resources",
        "Tasker Community",
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
