import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="WordWise"
          des="A full-stack web application was developed using React, Node.js, and Postgresql, with an  integrated open AI API for precise phrase correction. "
          src={projectOne}
          githubLink="https://github.com/Bahare09/ldn9-fp-wordwise"
          webLink="https://starter-kit-1fqo.onrender.com/"
        />
        <ProjectsCard
          title="Rock Paper Scissors"
          des="This is a team-work approach for Rock-Paper-Scissors Online Multiplayer Game implemented using React.js in Front-end and Node.js in Back-end. The main challenge was to enable instant communication between 2 players without any delays. Therefore, Socket.io library is used to enable this feature."
          src={projectTwo}
          githubLink="https://github.com/Bahare09/team-game-rock-paper-scissors"
          webLink="https://rock-paper-scissors-team.netlify.app/"
        />
        <ProjectsCard
          title="Video Recommendation"
          des=" Built a React-Express-PostgreSQL full-stack project allowing users to view, post, and manage YouTube videos, offering seamless video playback and preference-based voting."
          src={projectThree}
          githubLink="https://github.com/Bahare09/Full-Stack-Project-Assessment"
          webLink="https://video-recommandation-4.onrender.com/"
        />
       <ProjectsCard
          title="ApplySmart"
          des=" A personalised CV and cover letter creation solution, overseeing the development process and spearheading prompt engineering for seamless integration with the OpenAI API. Employing technologies including React, Express, and PostgreSQL, the project delivered efficient full-stack functionality"
          src={projectfour}
          githubLink="https://github.com/Bahare09/ApplySmart"
          webLink="https://applysmartc.onrender.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
