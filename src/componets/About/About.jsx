import React from 'react'
import "./About.scss";
import Img from "../../assets/img.webp"
const About = () => {
  return (
    <section className="about section-padding" id='about'>
        <div className="section-title">
            <span>About Me</span>
            <h3>A Passionate Front-End developer Who loves to Code!</h3>
        </div>
        <div className="wrapper about__container">
            <div className="about__left">
                <img src={Img} alt="about me"/>
            </div>
            <div className="about__right">
                <h3>About Me</h3>
                <p>
                    As a certified web developer skilled in HTML, CSS, and JavaScript, recognized by the Egyptian Ministry of Communications, I focus on creating responsive websites tailored for businesses. Recently, I secured third place in BASEF's software category. Proficient in HTML, CSS, JS, JQuery, Bootstrap, TypeScript, and React JS, I leverage these skills and frameworks to deliver high-quality results. With expertise in version control systems like Git and GitHub, I am well-prepared to elevate your business.                
                </p>
                <div className="about__info">
                    <div className="about__info__left">
                        <ul>
                            <li>
                                <span>Name</span>
                                <p>Yahia Abukhalifa</p>
                            </li>
                            <li>
                                <span>Email</span>
                                <p><a href="mailto:yehyaabukhalifa@gmail.com">Here !</a></p>
                            </li>
                        </ul>
                    </div>
                    <div className="about__info__right">
                        <ul>
                            <li>
                                <span>Address</span>
                                <p>Damitte , Egypt</p>
                            </li>
                            <li>
                                <span>Freelance</span>
                                <p>Available</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
