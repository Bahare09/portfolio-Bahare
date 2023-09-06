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

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
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
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon">
            <SiPostgresql />
          </span>

          <span className="bannerIcon">
            <SiExpress />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
