import React from 'react'
import content from '../public/content'
import imagepage from '../public/assets/img_page.jpg'
import ui from '../public/assets/ui.jpg'
import Image from 'next/image'

const teach_me = () => {
return (
    <div className='min-h-screen bg-zinc-800'>
        <br />
        <h1 className='text-xl text-center font-semibold text-white'>{content.no.teach_me[0]}</h1>
        <p className='text-white text-center'>{content.no.teach_me[1]}</p>
        <p className='text-white text-center'>{content.no.teach_me[2]}</p>
        <p className='text-white text-center'>{content.no.teach_me[3]}</p>
        <br />
        <p className='text-white text-center'>{content.no.teach_me[5]}</p>
        <center><Image className='border-slate-800 w-2/4' src={imagepage} alt={content.no.teach_me[4]} /></center>
        <br />
        <p className='text-white text-center'>{content.no.teach_me[6]}</p>
        <center><Image className='border-slate-800 w-2/4' src={ui} alt={content.no.teach_me[4]} /></center>
    </div>
)
}

export default teach_me