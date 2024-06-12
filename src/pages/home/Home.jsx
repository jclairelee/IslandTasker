import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Partners from "../../components/partners/Partners";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards, projects, taskers } from "../../../temporaryData";
import ServiceDark from "../../components/serviceDark/ServiceDark";
import Card from "../../components/card/Card";
import BookingSearchBox from "../../components/bookingSearchBox/BookingSearchBox";

function Home() {
  return (
    <div className="home">
      <Featured />
      <BookingSearchBox />
      <div className="home__emptyBox"></div>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Partners />
      <Card taskers={taskers} />
      <ServiceDark />
    </div>
  );
}

export default Home;
