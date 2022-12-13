import React from 'react'
import content from '../public/content'

const prosjekter = () => {
    return (
        
        <div className='projectdiv min-h-screen bg-zinc-800'>
            <h1 className='text-center text-2xl font-bold text-white'>{content.no.prosjekter[0]}</h1>
        </div>
    )
}

export default prosjekter