import React, { useState, useEffect, useRef } from "react";
import "./Partners.scss";
import logos from "/img/logos.png";
import small_logos from "/img/small_logos.png";

function Partners() {
  const [imageSource, setImageSource] = useState("");
  const [renderSecond, setRenderSecond] = useState(false);
  const [renderThird, setRenderThird] = useState(false);
  const logoRef = useRef(null);

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

  useEffect(() => {
    const logPosition = () => {
      if (logoRef.current) {
        const { left, top } = logoRef.current.getBoundingClientRect();
        // console.log(`Left: ${left}, Top: ${top}`);
      }
    };

    const intervalId = setInterval(logPosition, 1000);

    const renderSecondTimeout = setTimeout(() => {
      setRenderSecond(true);
    }, 3000);

    const renderThirdTimeout = setTimeout(() => {
      setRenderThird(true);
    }, 6000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(renderSecondTimeout);
      clearTimeout(renderThirdTimeout);
    };
  }, []);

  return (
    <div className="partners">
      <div className="partners-content">
        <img
          src={imageSource}
          ref={logoRef}
          alt="payment methods logos"
          className="partners-content__logo"
        />
        {renderSecond && (
          <img
            src={imageSource}
            alt="payment methods logos"
            className="partners-content__logo"
          />
        )}
        {renderThird && (
          <img
            src={imageSource}
            alt="payment methods logos"
            className="partners-content__logo"
          />
        )}
      </div>
    </div>
  );
}

export default Partners;
