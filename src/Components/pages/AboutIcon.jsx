import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIcon() {
  return (
    <div classNmae='about-link'>
        <Link to='/home'>
            <FaQuestion size={30}></FaQuestion>
        </Link>
        
      
    </div>
  )
}

export default AboutIcon
