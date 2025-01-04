import React from 'react'
import './Hero.css';
import dark_arrow from '../../edusity_assets/dark-arrow.png';
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for your world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis molestiae quae magnam possimus veritatis iure minus, iste voluptatum perspiciatis aliquam minima consectetur voluptate vero consequuntur reiciendis officiis praesentium, modi accusamus. Ea exercitationem ipsa debitis hic pariatur, quae, aut ab doloremque delectus id quasi odio eos in earum repellat provident.</p>
       <button className="btn"> Explore more <img src={dark_arrow} alt=""className='arrow' /></button>
      </div>
    </div>
  )
}

export default Hero
