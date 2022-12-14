import React from 'react'
import content from '../public/content'

const django = () => {
return (
    <div className='min-h-screen bg-zinc-800'>
        <br />
        <h1 className='text-xl font-bold text-center text-white'>{content.no.django[0]}</h1>
        <p className='text-white text-center'>{content.no.django[1]}</p>
        <p className='text-white text-center'>{content.no.django[2]}</p>
        
    </div>
)
}

export default django