import React from 'react'
import "./Services.scss"
import { serviceData } from '../../Data'
function Services() {
  return (
    <section className="services section-padding" id='services'>
        <div className="section-title">
            <span>Services</span>
            <h3>What I do for my clients ? </h3>
        </div>
        <div className="services__container wrapper">
            {serviceData.map(({name,des,img}) => (
                <div className="services__cards">
                    <div className="services__icons">
                        <img src={img} alt={name} />
                    </div>
                    <h3>{name}</h3>
                    <p>{des}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Services