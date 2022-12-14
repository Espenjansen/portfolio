import Link from 'next/link'
import React from 'react'
import content from '../public/content'

const Navbar = () => {
return (
    <div className='bg-zinc-800 left-1 flex flex-1 items-center justify-end md:justify-between'>
        <nav>
            <ul className='flex items-center gap-6 text-sm'>
                <li>
                    <Link className='font-semibold text-2xl text-white' href="/">{content.no.navbar[0]}</Link>
                </li>
                <li>
                    <Link className='font-semibold text-2xl text-white' href="/prosjekter">{content.no.navbar[1]}</Link>
                </li>
                <li>
                    <Link className='font-semibold text-2xl text-white' href="/om_meg">{content.no.navbar[2]}</Link>
                </li>
                <li>
                    <Link className='font-semibold text-2xl text-white' href="/kontakt_meg">{content.no.navbar[3]}</Link>
                </li>       
            </ul>
        </nav>
    </div>
    )
}

export default Navbar