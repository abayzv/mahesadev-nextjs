'use client'
import Image from "next/image"
import Link from "next/link"
import type { Article } from "../../../lib/article"
import DOMpurify from "isomorphic-dompurify"


export default function ArticleList({articles} : {articles: Article[]}) {

    let sanitazeText = (text: string) => {
        return DOMpurify.sanitize(text)
    }

    return (
        <div className="grid lg:grid-cols-3 gap-10">
            {articles.map((article, index) => (
                <Link href={`/article/${article.slug}`} key={index}>
                    <div key={article.id} className="bg-white text-black rounded-md overflow-clip">
                    <Image src={article.image} alt={article.title} width={200} height={300} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                    <div className="p-4">
                        <h2 className="font-bold text-lg text-blue-800 capitalize">{article.title}</h2>
                        <div className="mt-5 text-sm text-ellipsis overflow-hidden line-clamp-4" dangerouslySetInnerHTML={{ __html:sanitazeText(article.excerpt) }}></div>
                        <Link href={`/article/${article.slug}`} className="my-3 inline-block bg-orange-500 text-white p-2 rounded text-sm"> Lihat Selengkapnya</Link>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    )
}