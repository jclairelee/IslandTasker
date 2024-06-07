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
function Home() {
  return (
    <div className="home">
      <Featured />
      <Partners />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Products>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Products>

      <ServiceDark />
    </div>
  );
}

export default Home;
