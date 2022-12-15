import Image from 'next/image'
import React from 'react'
import content from '../public/content'
import bilde1 from '../public/assets/capture.png'
import glass from '../public/assets/glass.png'
import book from '../public/assets/book.png'
import ark from '../public/assets/idk.png'


const maya = () => {
return (
    <div className='min-h-screen bg-zinc-800'>
        <br />
        <h1 className='text-xl text-center font-semibold text-white'>{content.no.maya[0]}</h1>
        <p className='text-white text-center'>{content.no.maya[1]}</p>
        <p className='text-white text-center'>{content.no.maya[2]}</p>
        <p className='text-white text-center'>{content.no.maya[3]}</p>
        <center><Image className='border-slate-800' src={bilde1} alt={content.no.maya[4]} /></center>
        <br />
        <p className='text-white text-center'>{content.no.maya[5]}</p>
        <p className='text-white text-center'>{content.no.maya[6]}</p>
        <p className='text-white text-center'>{content.no.maya[7]}</p>
        <center><Image className='border-slate-800' src={glass} alt={content.no.maya[8]} /></center>
        <br />
        <p className='text-white text-center'>{content.no.maya[9]}</p>
        <p className='text-white text-center'>{content.no.maya[10]}</p>
        <p className='text-white text-center'>{content.no.maya[11]}</p>
        <p className='text-white text-center'>{content.no.maya[12]}</p>
        <center><Image className='border-slate-800' src={book} alt={content.no.maya[13]} /></center>
        <br />
        <p className='text-white text-center'>{content.no.maya[14]}</p>
        <p className='text-white text-center'>{content.no.maya[15]}</p>
        <p className='text-white text-center'>{content.no.maya[16]}</p>
        <center><Image className='border-slate-800 w-1/3 h-1/3' src={ark} alt={content.no.maya[17]} /></center>
    </div>
)
}

export default maya