import React, { useState, useEffect } from "react";
import "./Partners.scss";
import logos from "/img/logos.png";
import small_logos from "/img/small_logos.png";

function Partners() {
  const [imageSource, setImageSource] = useState("");

  useEffect(() => {
    const updateImageSource = () => {
      const screenWidth = window.innerWidth;
      const newImageSource = screenWidth < 550 ? small_logos : logos;
      setImageSource(newImageSource);
    };

    updateImageSource();
    window.addEventListener("resize", updateImageSource);

    return () => {
      window.removeEventListener("resize", updateImageSource);
    };
  }, []);

  return (
    <div className="partners">
      <div className="partners-content">
        <img
          src={imageSource}
          alt="payment methods logos"
          className="partners-content__logo"
        />
      </div>
    </div>
  );
}

export default Partners;
