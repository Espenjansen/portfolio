import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-zinc-800'>
        <ul>
            <li>
                <Link className='font-semibold text-2xl text-white' href="/om_meg">om meg</Link>
            </li>
            <span> | </span>
            <li>
                <Link className='font-semibold text-2xl text-white' href="/">Hjem</Link>
            </li>
            <span> | </span>
            <li>
                <Link className='font-semibold text-2xl text-white' href="/prosjekter">prosjekter</Link>
            </li>
        </ul>
    </div>
    )
}

export default Navbar