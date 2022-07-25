import React, { useState } from 'react'

function Card({data,setmodal}) {
  return (
    <div 
    onClick={() => {
        setmodal(true)
    }}
    className={`project-card `}>
        <p className='text-bold'>
            {data.name.toUpperCase()}
        </p>
        <p className='text-description'>
            {data.description}
        </p>
        <div className='card-hover'></div>
    </div>
  )
}

export default Card