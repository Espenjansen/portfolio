import React from 'react'
import Link from 'next/link'  
import content from '../public/content/index'
import Image from 'next/image'
import img from '../public/assets/bg.jpg'

const index = () => (
  <div className='indexdiv min-h-screen bg-zinc-800'>
  {/* <Image className='profilepic border-slate-800' layout='fill' src={img} alt="bg"/> */}
    <h1 className='text-center text-white  font-bold text-3xl'>{content.no.text[2]}</h1>
    <h1 className='text-center text-xl font-semibold text-white'>{content.no.text[1]} {content.no.text[0]}</h1>
  </div>
)

export default index

// {content.no.text.map((item) => {
//       return (
//         <div>jeg er {item}</div>
//       )
    // })}