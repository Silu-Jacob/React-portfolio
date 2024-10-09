import React, { useState } from 'react'
import './about.css'




function About() {
    
       
  return (
    <>
       
       <div className="about">
       <h1 style={{color:'wheat'}}>About</h1>
        <hr />
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, eum! Quidem, cumque impedit! Aut rem esse, corporis ratione ut reprehenderit tempora laudantium magni assumenda id animi possimus excepturi rerum provident?
      Velit, in, sapiente voluptatem repellendus perferendis laboriosam ipsum quibusdam voluptate illo necessitatibus voluptatibus, sunt sequi molestiae itaque! Ut esse porro officia iste provident totam incidunt eius sed similique. Laborum, cumque.
      Minima autem porro sed dicta ipsum dolore iste a illum praesentium non maiores cupiditate eveniet commodi explicabo beatae, necessitatibus quis eos harum provident earum, possimus molestiae, nobis reprehenderit? Ea, autem!    </p>
   

      <div class="skills-container">
        <div class="skill">
            <h3>Front-End</h3>
            <p>80+ Hours Experience</p>
        </div>
        <div class="skill">
            <h3>Python</h3>
            <p>4 Years Experience</p>
        </div>
        <div class="skill">
            <h3>Machine Learning</h3>
            <p>120+ Hours Experience</p>
        </div>
    </div>
    </>
  )
}

export default About
