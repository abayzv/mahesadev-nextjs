import ArticleList from "./article-list"
import { Metadata } from "next"

interface Article{
    id: number
    title: string
    content: string
    slug: string
    category: string
    thumbnail: string
}


export const metadata: Metadata = {
    title: 'Article',
    description: 'Article list'
}

async function getArticles() : Promise<Article[]>{
    const res = await fetch('http://localhost:3000/api/article')
    const articles = await res.json()
    
    return articles
}  

export default async function Page() {

    const articles = await getArticles()

    return (
        <div>
            <h1>Article List</h1>
            <ArticleList articles={articles} />
        </div>
    )
}