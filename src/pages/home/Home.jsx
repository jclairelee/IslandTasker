import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Partners from "../../components/partners/Partners";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from "../../../temporaryData";
import Service from "../../components/service/Service";
import ServiceDark from "../../components/serviceDark/ServiceDark";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Products from "../../components/products/Products";
import BookingSearchBox from "../../components/bookingSearchBox/BookingSearchBox";

function Home() {
  return (
    <div className="home">
      <Featured />
      <div className="home__emptyBox"></div>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Partners />
      <Products>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Products>
      <ServiceDark />
      <BookingSearchBox />
    </div>
  );
}

export default Home;
