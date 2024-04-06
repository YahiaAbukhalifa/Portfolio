import React from 'react';
import "./hero.scss";
import Img from "../../assets/img.png"
const Hero = () => {
  return (
    <section className="hero" id='home'>
        <div className="wrapper hero__container">
            <div className="hero__left">
                <h1>
                    Yahia <span className="cl-extra">Abukhalifa</span>
                </h1>
                <p>Front-end web developer</p>
                <a href="#contact" className="btn"><span>Contact Me</span></a>
            </div>
            <div className="hero__right">
                <div className="hero__img">
                    <img src={Img} alt="Yahia Abukalifa figure" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero