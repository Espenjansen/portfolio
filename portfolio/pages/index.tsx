import React from 'react'
import Link from 'next/link'  
import content from '../public/content/index'
import Image from 'next/image'
import img from '../public/assets/bg.jpg'

const index = () => (
  <div className='indexdiv min-h-screen bg-zinc-800'>
  {/* <Image className='profilepic border-slate-800' layout='fill' src={img} alt="bg"/> */}
    <h1 className='<h1 class="h1 absolute text-center bottom-2/3 text-white  font-bold text-3xl'>{content.no.text[2]}</h1>
    <Link className='projectlink absolute text-center bottom-1/2 left-1/3 font-semibold text-2xl text-white' href="/prosjekter">mine prosjekter</Link>
    <Link className='projectlink absolute text-center bottom-1/2 left-2/3 font-semibold text-2xl text-white' href="/om_meg">om meg</Link>
    <h1 className='h1 absolute bottom-1/3 text-center text-xl font-semibold text-white'>{content.no.text[1]} {content.no.text[0]}</h1>
  </div>
)

export default index

// {content.no.text.map((item) => {
//       return (
//         <div>jeg er {item}</div>
//       )
    // })}