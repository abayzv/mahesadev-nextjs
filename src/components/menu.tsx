'use client'

import { useState, useEffect, useMemo } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Menu(){
    const [activeIndex, setActiveIndex] = useState(0)

    // set active menu by path
    const pathName = usePathname()

    const menu = useMemo(() => [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Article',
            link: '/article'
        }
    ], [])
    
    useEffect(() => {
        const index = menu.findIndex(item => item.link === pathName)
        setActiveIndex(index)
    }, [menu, pathName])


    return (
        <ul>
            {menu.map((item, index) => (
                <Link href={item.link} key={index}><li key={index} className={`inline-block mx-3 uppercase text-md font-semibold ${activeIndex === index ? 'text-orange-600' : 'text-blue-800'}`}>{item.name}</li></Link>
            ))}
        </ul>
    )
}