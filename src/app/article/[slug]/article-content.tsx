'use client'

import Image from "next/image"

interface Owner {
    id: number
    title: string
    firstName: string
    lastName: string
    picture: string
}

interface Article {
    id: number
    image: string
    likes: number
    link: string
    tags: Array<string>
    text: string
    publishDate: string
    owner: Owner
}


export default function ArticleContent({article} : {article: Article} ) {
    return (
        <div>
            <Image src={article.image} alt={article.text} width={200} height={300} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
            <p>{article.text}</p>
        </div>
    )
}