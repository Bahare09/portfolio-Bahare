import React from "react";
import Title from "../layouts/Title";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="About Me" des="My Resume" />
      </div>
      <div className="text-center mt-8">
        <p className="text-lg text-gray-400">
          I am an experienced software developer with a passion for creating
          innovative solutions. You can check out my CV{" "}
          <a
            href="/path-to-your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-designColor hover:underline"
          >
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Resume;
