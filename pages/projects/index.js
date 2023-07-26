import Hero from "@/components/Home/Hero/Hero";
import React from "react";

const Projects = () => {
  const projectsHeading = "Projects page  Heading";
  const projectsDesc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis, tenetur aliquid vel assumenda eligendi excepturi quos dolore dignissimos illo possimus. Deserunt adipisci consectetur consequuntur hic aliquam nostrum aut placeat!";
  const projectsBtn = "Projects Button";

  const handleAlert =() =>  {
    alert("Alert Button Clicked")
  }

  return (
    <div className="h-[80vh] bg-stone-600 text-white">
      <Hero
        heroHeading={projectsHeading}
        heroDesc={projectsDesc}
        heroBtn={projectsBtn}
        onClick={handleAlert}
      />
    </div>
  );
};

export default Projects;
