import React from  'react'
import '../Title/Title.css'
 const Title =({subtitle,title})=>{
    return(
        <div>
           <div className="title">
            <p>{subtitle}</p>
            <h1>{title}</h1>
           </div>
        </div>
    )
 }
 export default Title;