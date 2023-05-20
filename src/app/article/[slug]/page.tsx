import Image from "next/image"
import { Metadata } from "next"
import ArticleContent from "./article-content"

interface Article {
    id: number
    title: string
    content: string
    slug: string
    category: string
    thumbnail: string
}

async function getArticle(slug: string) : Promise<Article> {
    const res = await fetch(`http://localhost:3000/api/article/${slug}`)
    const article = await res.json()

    return article
}

export let metadata: Metadata = {
    title: '',
    description: ''
}

export default async function Article({params}: {params: {slug: string}}){
    const {slug} = params
    const article = await getArticle(slug)
    
    metadata = {
        title: article.title,
        description: article.content
    }

    return (
        <div>
            <ArticleContent article={article} />
        </div>
    )
}