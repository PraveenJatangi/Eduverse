import React, { useRef } from 'react'
import '../Testimonials/Testimonials.css'
import next_icon from '../../edusity_assets/next-icon.png'
import User_1 from '../../edusity_assets/user-1.png' 
import User_2 from '../../edusity_assets/user-2.png' 
import User_3 from '../../edusity_assets/user-3.png' 
import User_4 from '../../edusity_assets/user-4.png' 

function Testimonials() {
   
       const slider= useRef();
       let tl=0;
   
const slideForward=()=>{
   if(tl > -50){
       tl-=25
       slider.current.style.transform=`translate(${tl}%)` ; 
     
   }

}
const slideBackward=()=>{
    if(tl < 0){
        tl+=25
        slider.current.style.transform=`translate(${tl}%)` ; 
      
    }
}
  return (
    <div className='testimonials'>
         <img src={next_icon} alt="next icon" className='next-btn' onClick={slideForward}/>
         <img src={next_icon} alt="next icon" className='back-btn' onClick={slideBackward}/>
         <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_1} alt="user one " />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue degree at Eduverse was one of the best 
                            decisiond i've ever made. Choosing to pursue degree at Eduverse was one of the best 
                            decisiond i've ever made.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_2} alt="user one " />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue degree at Eduverse was one of the best 
                            decisiond i've ever made. Choosing to pursue degree at Eduverse was one of the best 
                            decisiond i've ever made.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_3} alt="user one " />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue degree at Eduverse was one of the best 
                            decisiond i've ever made. Choosing to pursue degree at Eduverse was one of the best 
                            decisiond i've ever made.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={User_4} alt="user one " />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue degree at Eduverse was one of the best 
                            decisiond i've ever made. Choosing to pursue degree at Eduverse was one of the best 
                            decisiond i've ever made.
                        </p>
                    </div>
                </li>
                
            </ul>
         </div>
    </div>
  )
}

export default Testimonials
