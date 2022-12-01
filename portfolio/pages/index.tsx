import React from 'react'
import Link from 'next/link'
import content from '../public/content/index'
import Image from 'next/image'
import profilepic from '../public/assets/portfolio_bilde.png'

const index = () => (
  <div className='indexdiv min-h-screen bg-zinc-800'>
    <Image className='profilepic border-slate-800' src={profilepic} alt={content.no.text[4]} />
    <h1 className='h1 text-3xl font-bold text-white'>{content.no.text[2]}</h1>
    <Link className='projectlink font-semibold text-2xl text-white' href="/prosjekter">mine prosjekter</Link>
    <h1 className='h1 text-xl font-semibold text-white'>{content.no.text[1]} {content.no.text[0]}</h1>
  </div>
)

export default index

// {content.no.text.map((item) => {
//       return (
//         <div>jeg er {item}</div>
//       )
//     })}