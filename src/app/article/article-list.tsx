'use client'
import Image from "next/image"
import Link from "next/link"

interface Article{
    id: number
    title: string
    content: string
    slug: string
    category: string
    thumbnail: string
}

export default function ArticleList({articles} : {articles: Article[]}) {
    return (
        <div className="grid grid-cols-4 gap-10">
            {articles.map(article => (
                <div key={article.id} className="bg-white text-black rounded-md overflow-clip">
                    <Image src={article.thumbnail} alt={article.title} width={200} height={300} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                    <div className="p-4">
                        <h2 className="font-bold text-lg capitalize">{article.title}</h2>
                        <p className="truncate">{article.content}</p>
                        <Link href={`/article/${article.slug}`} className="my-3 inline-block bg-sky-500 text-white p-2 rounded text-sm"> Read More </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}