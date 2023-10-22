import React from "react";
import { FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

const Media = () => {
  const linkedinUrl =
    "https://www.linkedin.com/in/bahare-bahreinian-002843246/";
  const githubUrl = "https://github.com/Bahare09";

  // Add URLs for your skills and languages
  const reactUrl = "https://reactjs.org/";
  const nodeUrl = "https://nodejs.org/";
  const postgresUrl = "https://www.postgresql.org/";
  const expressUrl = "https://expressjs.com/";
  const tailwindUrl = "https://tailwindcss.com/";

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-10 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-3">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-3">
          {/* Add links to your skills and languages */}
          <a
            href={reactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaReact />
          </a>
          <a
            href={nodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiNodedotjs />
          </a>
          <a
            href={postgresUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiPostgresql />
          </a>
          <a
            href={expressUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiExpress />
          </a>
          <a
            href={tailwindUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiTailwindcss />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
