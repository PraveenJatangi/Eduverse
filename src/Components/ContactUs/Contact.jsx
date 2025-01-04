import React from 'react'
import '../ContactUs/Contact.css'
import Message from '../../edusity_assets/msg-icon.png'
import Phone from '../../edusity_assets/phone-icon.png'
import Mail from '../../edusity_assets/mail-icon.png'
import Location from '../../edusity_assets/location-icon.png'
import White_arrow from '../../edusity_assets/white-arrow.png'

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d7fd4fab-f229-4fce-a339-a66eb48244cd");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
           <div className="contact-col col-1">
              <h3>Send Us A Message <img src={Message} alt="" /></h3>
              <p>Feel free to reach out through contact for or information below.
                Your feedback, questions , and suggestions are
                 important to us as we strive to provide exceptional service to our
                 university community.</p>
               <ul>
                <li><img src={Mail} alt="" />Contact@Eduverse.dev</li>
                <li><img src={Phone} alt=""/>+1 123-456-7890  </li>
                <li><img src={Location } alt="" /> Hyderabad city, <br /> Telangan</li>
               </ul>
            </div>  
            <div className="contact-col">
                 <form onSubmit={onSubmit}>
                       <label htmlFor=""> Your Name</label>
                       <input type="text" name="name" placeholder='Enter your name' required/>
                       <label htmlFor="">Phone number</label>
                       <input type="number" name='number' placeholder='Enter your mobile number' required/>
                       <label htmlFor="">Write your message here</label>
                       <textarea name="message" id="" rows='6' placeholder='enter your meassage'></textarea>
                       <button type='submit' className="btn btn-dark">Submit <img src={White_arrow} alt="" /></button>
                 
                 </form>
                 <span>{result}</span>
                </div>                                                                                                                                                                       
      
    </div>
  )
}

export default Contact
