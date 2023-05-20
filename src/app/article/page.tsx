import ArticleList from "./article-list"
import { Metadata } from "next"
import {fetchDatas} from "../../../api"
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
    const articles = await fetchDatas('/article')

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