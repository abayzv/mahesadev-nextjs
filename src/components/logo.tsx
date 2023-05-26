import Image from "next/image";
import Link from "next/link";

interface Props {
    width: number
    height: number
}

export default function Logo({width, height} : Props){
    return (
        <div className={`lg:w-auto w-20`}>
            <Link href="/"><Image src="https://mahesadev.com/logo-kai-new.png" alt="logo" width={width} height={height} /></Link>
        </div>
    )
}