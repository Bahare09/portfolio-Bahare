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
          I'm a passionate web developer with a background in problem-solving
          and technology. My journey into web development has been driven by a
          thirst for creative solutions and a commitment to lifelong learning.
          Equipped with a unique skill set that includes research, coding, and
          data modeling, I'm dedicated to crafting innovative web solutions. My
          approach is rooted in effective communication and collaboration, as I
          believe that teamwork enhances the impact of web experiences. I'm
          excited about the endless possibilities in web development and look
          forward to creating solutions that inspire and empower.{" "}
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
