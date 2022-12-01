import React from 'react'
import Link from 'next/link'
import content from '../public/content'

const prosjekter = () => {
    return (
        
        <div className='projectdiv min-h-screen bg-zinc-800'>
            <title>portfolio</title>
            <h1 className='projectsh1 text-3xl font-bold text-white'>{content.no.text[3]}</h1>
            <Link className='indexlink text-2xl font-semibold text-white' href="/">home</Link>
        </div>
    )
}

export default prosjekter