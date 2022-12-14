import React from 'react'
import content from '../public/content'

const teach_me = () => {
return (
    <div className='min-h-screen bg-zinc-800'>
        <br />
        <h1 className='text-xl text-center font-semibold text-white'>{content.no.teach_me[0]}</h1>
        <p className='text-white text-center'>{content.no.teach_me[1]}</p>
        <p className='text-white text-center'>{content.no.teach_me[2]}</p>
        <p className='text-white text-center'>{content.no.teach_me[3]}</p>
    </div>
)
}

export default teach_me