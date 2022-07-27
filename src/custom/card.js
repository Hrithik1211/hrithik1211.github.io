import React from 'react'

function Card({data,setmodal}) {
  return (
    <div 
    onClick={() => {
        setmodal(true)
    }}
    className={`project-card ${setmodal?'project-card-hover':''}`}>
        <p className='text-bold'>
            {data.name.toUpperCase()}
        </p>
        <p className='text-description'>
            {data.description}
        </p>
        {setmodal&&<div className='card-hover'></div>}
    </div>
  )
}

export default Card