'use client'

import Image from "next/image"

interface Article {
    id: number
    title: string
    content: string
    slug: string
    category: string
    thumbnail: string
}


export default function ArticleContent({article} : {article: Article} ) {
    return (
        <div>
            <Image src={article.thumbnail} alt={article.title} width={200} height={300} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    )
}