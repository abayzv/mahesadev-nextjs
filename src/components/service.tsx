'use client'
import Image from "next/image"

interface Services{
    title: string
    description: string
    image: string
    link: string
}

function Header(){
    return(
        <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-800">Adaptif, Solutif, Kolaboratif Untuk Indonesia</h2>
            <hr className="border-2 inline-block w-32 mt-7 border-orange-500" />
            <hr className="border-2 inline-block w-32 mt-7 border-blue-500" />
        </div>
    )
}

function Card({title, description, image, link}: Services){
    return (
        <div className="bg-white p-5 rounded-md hover:scale-105 transition-all ease-in shadow-sm">
            <div>
                <Image src={image} alt={title} width={300} height={200} className="w-full h-60 object-cover rounded-md" />
            </div>
            <div className="text-lg font-bold text-blue-800 mt-5">
                {title}
            </div>
            <div className="mt-3">
                {description}
            </div>
            <div className="mt-5 w-full">
                <a href={link} className="text-white bg-orange-500 inline-block w-full text-center p-3">Selengkapnya</a>
            </div>
        </div>
    )
}

export default function Service(){

    const services : Services[] = [
        {
            title: 'Angkutan Penumpang',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://mahesadev.com/n_angkutan_penumpang.jpg',
            link: '/angkutan-penumpang'
        },
        {
            title: 'Angkutan Barang',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://mahesadev.com/n_angkutan_barang.jpg',
            link: '/angkutan-barang'
        },
        {
            title: 'Pengusahaan Aset',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://mahesadev.com/n_pengusahaan_aset.jpg',
            link: '/pengusahaan-aset'
        }

    ]

    return(
        <div className="container mx-auto lg:px-20 px-5 lg:py-36 py-10">
            <Header />
            <div className="grid lg:grid-cols-3 gap-10 mt-16">
                {services.map((service, index) => (
                    <Card key={index} title={service.title} description={service.description} image={service.image} link={service.link} />
                ))}
            </div>
        </div>
    )
}