import React from 'react'
import '../Campus/Campus.css'
import Gallery_img1 from '../../edusity_assets/gallery-1.png'
import Gallery_img2 from '../../edusity_assets/gallery-2.png'
import Gallery_img3 from '../../edusity_assets/gallery-3.png'
import Gallery_img4 from '../../edusity_assets/gallery-4.png'
import White_arrow from '../../edusity_assets/white-arrow.png'
function Campus() {
  return (
    <div className='campus'>
        <div className="gallary">
            <img src={Gallery_img1} alt="gallery img 1" />
            <img src={Gallery_img2} alt="gallery img 2" />
            <img src={Gallery_img3} alt="gallery img 3" />
            <img src={Gallery_img4} alt="gallery img 4" />
        </div>
        <button className="btn btn-dark">See More Here <img src={White_arrow} alt="white arrow" className='arrow' /></button>
      
    </div>
  )
}

export default Campus
