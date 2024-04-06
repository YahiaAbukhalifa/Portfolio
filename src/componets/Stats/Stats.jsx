import React from 'react'
import "./stats.scss"
import { statsData } from '../../Data'
function Stats() {
  return (
    <section className="stats section-padding">
        <div className="stats__container wrapper">
            {statsData.map(({name , des}) => (
                <div className="stats__card" key={name}>
                    <h3>{name}</h3>
                    <span>{des}</span>
                </div>
           ))}
        </div>
    </section>
  )
}

export default Stats