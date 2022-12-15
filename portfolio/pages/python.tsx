import React from 'react'
import content from '../public/content'
import blackjack from '../public/assets/blackjack.png'
import game from '../public/assets/multiple_choice_game.png'
import Image from 'next/image'


const python = () => {
return (
    <div className='min-h-screen bg-zinc-800'>
        <br />
        <h1 className='text-2xl text-center font-semibold text-white'>{content.no.python[0]}</h1>
        <p className='text-white text-center'>{content.no.python[1]}</p>
        <br />
        <h1 className='text-xl text-center font-semibold text-white'>{content.no.python[2]}</h1>
        <p className='text-white text-center'>{content.no.python[3]}</p>
        <p className='text-white text-center'>{content.no.python[4]}</p>
        <center><Image className='border-slate-800' src={blackjack} alt={content.no.python[5]} /></center>
        <br />
        <h1 className='text-xl text-center font-semibold text-white'>{content.no.python[6]}</h1>
        <p className='text-white text-center'>{content.no.python[7]}</p>
        <p className='text-white text-center'>{content.no.python[4]}</p>
        <center><Image className='border-slate-800' src={game} alt={content.no.python[5]} /></center>
    </div>
)
}

export default python