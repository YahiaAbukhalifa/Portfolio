import React from 'react';
import"./Skills.scss";
import { skillsData } from '../../Data';
function Skills() {
  return (
    <section className="skills section-padding">
        <div className="section-title">
            <span>Skills</span>
            <h3>This is a view for my main skills</h3>
        </div>
        <div className="skills__container wrapper">
            {skillsData.map(({ name, className }) => (
            <div className="skills__card" key={name}>
            <span>{name}</span>
            <div className="skills__line">
                <div className={className}></div>
            </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Skills