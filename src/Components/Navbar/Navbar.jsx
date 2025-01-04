import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'
import logo from '../../edusity_assets/logo.png'
import menu from '../../edusity_assets/menu-icon.png'


const Navbar = () => {

  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    const handlescroll=()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    }
    window.addEventListener('scroll',handlescroll);
    
  },[]);

  const[menubar, setMenubar]=useState(false)
  const HideMenuBar=()=>{
      menubar?setMenubar(false):setMenubar(true);      

  }

  return (
    <div>
       <nav className={`container  ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="logo" className='logo' />
     
       <ul className={menubar?'':'hide-menu'}>
        <li><Link 
      
      to="hero" 
      spy={true} 
      smooth={true} 
      offset={-250} 
      duration={500} >  Home </Link>
     </li> 
     <li><Link 
      
      to="programs" 
      spy={true} 
      smooth={true} 
      offset={-250} 
      duration={500} >  Programs </Link>
     </li>
     <li><Link 
     
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-150} 
      duration={500} >  About us </Link>
     </li>
     <li><Link 
      
      to="campus" 
      
      smooth={true} 
      offset={-250} 
      duration={500} >  Campus </Link>
     </li>
     <li><Link 
      
      to="testimonials" 
      spy={true} 
      smooth={true} 
      offset={-250} 
      duration={500} >  Testimonials </Link>
     </li>
     <li><Link 
      
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={-250} 
      duration={500} > <button className='btn'>contact us</button> </Link>
     </li>
       
       </ul>
       <img src={menu} alt="" className='menu-icon' onClick={HideMenuBar} />
       </nav>
    </div>
  )
}

export default Navbar
