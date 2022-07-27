import { get, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../Firebase'

function DataResponseData() {
    const [response, setResponse] = useState({})
    useEffect(() => {
        onValue(ref(database,'messages/'),(snapshot) => {
            setResponse(snapshot.val())
        })
    },[])
  return (
    <div>
{response &&
        Object.values(response).map(val => (
            <div className='row' key={Math.random()*1111111}>
                <span className='col-3' style={{padding:12,backgroundColor:'pink',marginTop:4}}>{val.name} </span>
                <span className='col-3' style={{padding:12,backgroundColor:'pink',marginTop:4}}>{val.email} </span>
                <span className='col-3' style={{padding:12,backgroundColor:'pink',marginTop:4}}>{val.subject} </span>
                <span className='col-3' style={{padding:12,backgroundColor:'pink',marginTop:4}}>{val.message} </span>
            </div>
        ))
    }
    </div>
    
  )
}

export default DataResponseData