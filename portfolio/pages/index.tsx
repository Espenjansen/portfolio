import React from 'react'
import content from '../public/content/index'

const index = () => (
  <div className='indexdiv min-h-screen bg-zinc-800'>
    <h1 className='align-middle text-center text-white  font-bold text-3xl'>{content.no.text[2]}</h1>
    <h1 className='text-center text-xl font-semibold text-white'>{content.no.text[1]} {content.no.text[0]}</h1>
  </div>
)

export default index

// {content.no.text.map((item) => {
//       return (
//         <div>jeg er {item}</div>
//       )
    // })}