import React from 'react'

const Icons = ({ icon, className = '', ...props }) => {
  const iconsList = {
    'next':(
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
    ),
    'prev':(
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
    )
}
return icon && iconsList[icon]
}

export default Icons