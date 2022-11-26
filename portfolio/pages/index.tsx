import React from 'react'
import Link from 'next/link'
import content from '../public/content/index'

const index = () => (
  <div className='indexdiv min-h-screen bg-zinc-800'>
    <h1 className='h1 text-3xl font-bold text-white'>Dette er min portfolio</h1>
    <Link className='projectlink text-white' href="/prosjekter">mine prosjekter</Link>
    {/* <h1 className='h1 text-2xl align-middle font-semibold text-white'>{content.no.text[1]} {content.no.text[0]}</h1> */}
  </div>
)

export default index

// {content.no.text.map((item) => {
//       return (
//         <div>jeg er {item}</div>
//       )
//     })}