import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero.jsx";
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/ContactUs/Contact.jsx';
function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='our programs' title='what we offer'/>
        <Programs/>
        <About/>
        <Title subtitle='Gallery' title='Campus photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subtitle='Contact Us' title='Get In Touch'/>
        <Contact/>
      </div>
      
      
    </div>
  );
}

export default App;
