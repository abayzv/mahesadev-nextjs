'use client'
import Image from "next/image"
import Link from "next/link"
import type { Article } from "../../../lib/article"


export default function ArticleList({articles} : {articles: Article[]}) {

    return (
        <div className="grid grid-cols-3 gap-10">
            {articles.map((article, index) => (
                <div key={article.id} className="bg-white text-black rounded-md overflow-clip">
                    <Image src={article.image} alt={article.title} width={200} height={300} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                    <div className="p-4">
                        <h2 className="font-bold text-lg capitalize">{article.title}</h2>
                        <p className="truncate">{article.excerpt}</p>
                        <Link href={`/article/${article.slug}`} className="my-3 inline-block bg-sky-500 text-white p-2 rounded text-sm"> Lihat Selengkapnya</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}