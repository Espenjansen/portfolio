import Image from 'next/image'
import React from 'react'
import portfoliopic from '../public/assets/portfolio1.jpg'
import content from '../public/content/index'

const om_meg = () => {
return (
<div className='indexdiv min-h-screen bg-zinc-800'>
    <Image className='profilepic border-slate-800' src={portfoliopic} alt="bilde av meg" />
    <h1 className='text-3xl text-white font-bold text-center'>Om meg</h1>
    <p className='text-white text-center'>{content.no.text[5]}</p>
</div>
)
}

export default om_meg