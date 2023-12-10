import React from "react";
import { FaFilePdf } from "react-icons/fa";
import Title from "../layouts/Title";

const Resume = () => {
  const handleCVButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1PCg8vXm7t_G7SEnoldipMVtp0A5Qdc0-/view?usp=sharing",
      "_blank",
      "noopener noreferrer"
    );
  };

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
          forward to creating solutions that inspire and empower .{" "}
          <button
            className="text-white bg-designColor hover:bg-opacity-80 rounded-full py-2 px-4 transition duration-300 ease-in-out cursor-pointer flex items-center"
            onClick={handleCVButtonClick}
            style={{ marginTop: "151px", marginLeft: "570px" }}
          >
            <FaFilePdf className="mr-2" /> View CV
          </button>
        </p>
      </div>
    </section>
  );
};

export default Resume;
