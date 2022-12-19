import Image from "next/image"
import content from "../public/content"
import create from "../public/assets/create.png"
import list from "../public/assets/liste.png"
import view from "../public/assets/view.png"
import login from "../public/assets/login.png"




const django = () => {
return (
    <div className="min-h-screen bg-zinc-800">
        <h1 className="text-white text-center text-2xl font-semibold">{content.no.django[0]}</h1>
        <p className="text-white text-center ">{content.no.django[1]}</p>
        <p className="text-white text-center ">{content.no.django[2]}</p>
        <br />
        <h1 className="text-white text-center text-2xl font-semibold">{content.no.django[3]}</h1>
        <center><Image className="w-2/4" src={create} alt={content.no.django[3]} /></center>
        <br />
        <h1 className="text-white text-center text-2xl font-semibold">{content.no.django[5]}</h1>
        <center><Image className="w-2/4" src={list} alt={content.no.django[5]} /></center>
        <br />
        <h1 className="text-white text-center text-2xl font-semibold">{content.no.django[5]}</h1>
        <center><Image className="w-2/4" src={list} alt={content.no.django[5]} /></center>
        <br />
        <h1 className="text-white text-center text-2xl font-semibold">{content.no.django[4]}</h1>
        <center><Image className="w-2/4" src={view} alt={content.no.django[4]} /></center>
        <br />
        <h1 className="text-white text-center text-2xl font-semibold">{content.no.django[6]}</h1>
        <center><Image className="w-2/4" src={login} alt={content.no.django[4]} /></center>
        <br />


        
    </div>
)
}

export default django