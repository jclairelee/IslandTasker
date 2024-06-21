import React, { useState, useEffect, useRef } from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { websiteDetail, projects, taskers } from "../../../temporaryData";
import ServiceDark from "../../components/serviceDark/ServiceDark";
import Card from "../../components/card/Card";
import BookingSearchBox from "../../components/bookingSearchBox/BookingSearchBox";
import Map from "../../components/map/Map";
import ServiceArea from "../../components/serviceArea/ServiceArea";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const trustedSection = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <Featured />
      <BookingSearchBox />
      <div style={{ height: isScrolled ? "5.75rem" : "9.75rem" }}></div>
      <h1
        style={{ fontFamily: "Permanent Marker" }}
        className="home-sectionTitle"
      >
        Categories
      </h1>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {websiteDetail.categories.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>

      <div style={{ height: isScrolled ? "5.75rem" : "9.75rem" }}></div>
      <h1
        style={{ fontFamily: "Permanent Marker" }}
        className="home-sectionTitle"
      >
        Trusted Taskers{" "}
      </h1>
      <Card taskers={taskers} />
      <div style={{ height: isScrolled ? "5.75rem" : "9.75rem" }}></div>
      <ServiceDark />
    </div>
  );
}

export default Home;
