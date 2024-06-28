import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrows Leaders Today</h2>
            <p>Practical Learning: Bootcamps focus on job-ready skills without the need for electives or general education courses. If you want to learn coding, thats precisely what youll study1. This streamlined approach ensures you gain relevant skills efficiently.</p>
            <p>Flexibility: With a variety of bootcamps available, you can find one that fits your schedule. Whether youre working full-time or have other commitments, theres likely a bootcamp that suits your needs1.</p>
            <p>Career Preparation: Bootcamps equip students with practical skills needed in the job market. Many graduates feel ready for their next career step after completing a bootcamp, making them a valuable pathway to tech careers2.</p>
        </div>
    </div>
  )
}

export default About