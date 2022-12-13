import React from 'react'
import content from '../public/content'

const kontakt_meg = () => {
return (
    <div className='min-h-screen bg-zinc-800'>
        <br />
        <p className='text-center text-white font-semibold'>{content.no.kontakt_meg[0]}</p>
        <p className='text-center text-white font-semibold'>{content.no.kontakt_meg[1]}</p>

    </div>
)
}

export default kontakt_meg