import React from 'react'
import Link from 'next/link'

const prosjekter = () => {
    return (
        
        <div className='projectdiv min-h-screen bg-zinc-800'>
            <title>portfolio</title>
            <h1 className='projectsh1 text-3xl font-bold text-white'>Dette er mine prosjekter</h1>
            <Link className='indexlink text-white' href="/">home</Link>
        </div>
    )
}

export default prosjekter