import { NextPage } from "next";
import React from "react";
import { SKILLS } from "../data/skills";

const AboutPage: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        <p className="text-xl text-justify">
          I am Ashik Rahman, 23 years old and from Bangladesh. Development has
          been an interest of mine for many years, and I work with anything from
          Desktop App to Mobile App and front-end development. All the skills
          and tools I use, are self-taught over years of practice and expanding
          my horizons.
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-8">Skills</h1>
        <div className="flex flex-wrap">
          {SKILLS.map((skill) => (
            <span
              style={{ opacity: `${skill.grade}` }}
              className={`border-2 p-2 m-1 border-darkPrimary`}
              key={skill.name}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
