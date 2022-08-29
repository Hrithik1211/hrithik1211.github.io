import React, { useEffect } from 'react'

function JobCard({data,click,setclick}) {
  return (
    <div onClick={() => {setclick(click)}} className='job-card justify-content-center'>
        <li className='line'>

        </li>
        <div style={{paddingLeft:40}}>
        <div style={{display:'flex',justifyContent:'',alignItems:'center'}} >
        <div style={{backgroundColor:'#94618E',width:'fit-content',
    padding:'4px 12px',borderRadius:12,color:'#eeeeee'
    ,marginBottom:16,fontSize:12
    }} >
        {data.details}
        </div>
        <p style={{fontStyle:'italic',fontSize:14,paddingRight:12,fontWeight:'bold',paddingBottom:'',paddingLeft:12}} > {data.moreDetails}</p>
        </div>
        <h5 style={{color:'#49274A',fontSize:18,fontWeight:700}}>
            {data.name.toUpperCase()} - <span style={{fontSize:14,fontWeight:600}} >{data.college.toUpperCase()} </span>
        </h5>
        <p style={{color:'#49274A',fontWeight:400}}>
            {data.description}
        </p>
        </div>

    </div>
  )
}

export default JobCard