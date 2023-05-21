'use client'
import Image from "next/image"
import Link from "next/link"

interface Article{
    id: number
    image: string
    likes: number
    tags: Array<string>
    text: string
    publishDate: string
    owner: Object
}


export default function ArticleList({articles} : {articles: Article[]}) {
    return (
        <div className="grid grid-cols-4 gap-10">
            {articles.map((article, index) => (
                <div key={article.id} className="bg-white text-black rounded-md overflow-clip">
                    <Image src={article.image} alt={article.text} width={200} height={300} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                    <div className="p-4">
                        <h2 className="font-bold text-lg capitalize">Article {index}</h2>
                        <p className="truncate">{article.text}</p>
                        <Link href={`/article/${article.id}`} className="my-3 inline-block bg-sky-500 text-white p-2 rounded text-sm"> Read More </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}