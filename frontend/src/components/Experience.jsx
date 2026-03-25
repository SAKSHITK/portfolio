import React from "react";
import  DheeCodingLab from "../assets/dclgrow_logo.jpeg"; // Replace with actual logos

const Experience = () => {
  const experiences = [
    {
      company: "Dhee Coding Lab",
      role: "Full Stack Developer Intern",
      period: "Feb 2026 – Present",
      logo: DheeCodingLab,
      description:
        "Worked on developing web applications using HTML,CSS, Javascript and React js. Implemented user authentication and REST APIs for internal projects.",
    },
  ];

  return (
    <section id="experience" className="experience-section" style={{padding:"20px"}}  >
      <h2 className="section-title" style={{marginTop:"-30px"}} >Experience</h2>
      <div className="experience-grid"  >
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card" >
            <img src={exp.logo} alt={exp.company} className="experience-logo" />
            <h3>{exp.company}</h3>
            <p className="experience-role">{exp.role}</p>
            <p className="experience-period">{exp.period}</p>
            <p className="experience-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
