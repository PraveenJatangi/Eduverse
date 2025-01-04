import React from 'react'
import './Programs.css'
import program_1 from '../../edusity_assets/program-1.png'
import program_2 from '../../edusity_assets/program-2.png'
import program_3 from '../../edusity_assets/program-3.png'
import program_caption_1 from '../../edusity_assets/program-icon-1.png'
import program_caption_2 from '../../edusity_assets/program-icon-2.png'
import program_caption_3 from '../../edusity_assets/program-icon-3.png'
const Programs = () => {
  return (
    <div className='programs'>
       <div className="program">
        <img src={program_1} alt="program_1" />
        <div className="caption">
          <img src={program_caption_1} alt="program_caption_1" />
          <p>Graduation Degree</p>
        </div>
       </div>
       <div className="program">
        <img src={program_2} alt="program_3" />
        <div className="caption">
          <img src={program_caption_2} alt="program_caption_2" />
          <p>Masters Degree</p>
        </div>
       </div>
       <div className="program">
        <img src={program_3} alt="program_3" />
        <div className="caption">
          <img src={program_caption_3} alt="program_caption_3" />
          <p>Post Graduation</p>
        </div>
       </div>
    </div>
  )
}

export default Programs
