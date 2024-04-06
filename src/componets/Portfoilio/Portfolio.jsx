import React from 'react';
import "./Portfolio.scss";
import { portfolioData } from '../../Data';
import { FaExternalLinkAlt } from "react-icons/fa";
function Portfolio() {
  return (
   <section className="portfolio section-padding" id='portfolio'>
        <div className="section-title">
            <span>Portfolio</span>
            <h3>Sample of my recent projects (Updated frequently)</h3>
        </div>
        <div className="portfolio__container wrapper">
            {portfolioData.map(({id,img,Link,title,des}) => (
                <div className='portfolio__box'>
                    <img src={img} alt="" />
                    <div className='portfolio__layer'>
                        <h3>{title}</h3>
                        <p>{des}</p>
                        <a href={Link} target='blank'><FaExternalLinkAlt/></a>
                    </div>
                </div>
            ))}
        </div>
   </section>
  )
}

export default Portfolio