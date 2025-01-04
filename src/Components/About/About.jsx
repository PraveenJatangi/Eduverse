import React from 'react'
import '../About/About.css';
import about_img from '../../edusity_assets/about.png';
import play_icon from '../../edusity_assets/play-icon.png'
function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="about png" className='about-img'/>
        <img src={play_icon} alt="play icon" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>about university</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students
With the knowledge, skills, and experiences needed to excel in the dynamic field Of
education.
</p>

<p>With a focus on innovation, hands-on learning, and personalized mentorship. our
programs prepare aspiring educators to make a meaningful impact in classrooms,
schools, and communities.</p>

<p>
Whether you aspire to become a teacher, administrator, counselor, or educational
leader, our diverse range of programs offers the perfect pathway to achieve your
goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
