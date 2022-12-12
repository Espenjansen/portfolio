import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-zinc-800 flex flex-1 items-center justify-end md:justify-between'>
        <nav>
        <ul className='flex items-center gap-6 text-sm'>
            <li>
                <Link className='font-semibold text-2xl text-white' href="/">Hjem</Link>
            </li>
            <span className='text-white'> | </span>
            <li>
                <Link className='font-semibold text-2xl text-white' href="/prosjekter">prosjekter</Link>
            </li>
            <span className='text-white'> | </span>
            <li>
                <Link className='font-semibold text-2xl text-white' href="/om_meg">om meg</Link>
            </li>
        </ul>
        </nav>
    </div>
    )
}

export default Navbar