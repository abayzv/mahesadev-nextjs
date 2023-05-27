import { Gallery } from "."
import Image from "next/image"

export default function GalleryPartner({gallery}: {gallery: Gallery[]}){
    return (
        <div className="flex justify-center gap-5 lg:w-full w-[200%] px-5">
            {gallery.map((item, index) => (
                <ul key={index} className="filter grayscale hover:grayscale-0 hover:scale-105 transition-all ease-in-out">
                    <li><Image src={item.src} alt={item.title} width={200} height={200} /></li>
                </ul>
            ))}
        </div>
    )
}