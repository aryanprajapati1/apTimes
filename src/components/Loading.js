import React from 'react'
import Loading  from './loading.gif';

export default function spinner() {
  return (
    <div className='text-center'>
        <img src={Loading}></img>
    </div>
  )
}
