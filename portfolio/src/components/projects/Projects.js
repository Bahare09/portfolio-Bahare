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
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="WordWise"
          des="-Developed a full-stack web application using React, Node.js, and PostgreSQL.
-Integrated OpenAI API for precise phrase corrections and alternative suggestions.
-Demonstrated strong problem-solving skills and attention to detail.
-Successfully deployed the application for real-world testing and feedback.Final Project "
          src={projectOne}
          githubLink="https://github.com/Bahare09/ldn9-fp-wordwise"
          webLink="https://starter-kit-1fqo.onrender.com/"
        />
        <ProjectsCard
          title="Rock Paper Scissors"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          src={projectTwo}
          githubLink="https://github.com/Bahare09/team-game-rock-paper-scissors"
          webLink="https://rock-paper-scissors-team.netlify.app/"
        />
        <ProjectsCard
          title="Video Recommendation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          src={projectThree}
          githubLink="https://github.com/Bahare09/Full-Stack-Project-Assessment"
          webLink="https://video-recommandation-4.onrender.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
