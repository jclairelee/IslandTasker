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

function Home() {
  return (
    <div className="home">
      <Featured />
      <Partners />
      <Slide>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Service />
      <ServiceDark />
      <Slide>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
