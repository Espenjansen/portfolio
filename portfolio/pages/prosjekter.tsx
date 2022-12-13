import Link from 'next/link'
import React from 'react'
import content from '../public/content'

const prosjekter = () => {
    return (
        
        <div className='min-h-screen bg-zinc-800'>
            <br />
            <h1 className='text-center text-2xl font-bold text-white'>{content.no.prosjekter[0]}</h1>
            <br />
            <center><h1 className='text-2xl font-semibold text-white'>{content.no.prosjekter[1]}</h1></center>
            <center><button className='text-white px-6 py-2 bg-cyan-500 rounded-xl'><Link href={"teach_me"}>{content.no.prosjekter[2]}</Link></button></center>
            <br />
            <center><h1 className='text-2xl font-semibold text-white'>{content.no.prosjekter[3]}</h1></center>
            <center><button className='text-white px-6 py-2 bg-cyan-500 rounded-xl'><Link href={"/django"}>{content.no.prosjekter[4]}</Link></button></center>
        </div>
    )
}

export default prosjekter