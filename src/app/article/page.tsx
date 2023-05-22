import ArticleList from "./article-list"
import { Metadata } from "next"
import {fetchDatas} from "../../../api"

interface Article{
    id: number
    image: string
    likes: number
    tags: Array<string>
    text: string
    publishDate: string
    owner: Object
}


export const metadata: Metadata = {
    title: 'Article',
    description: 'Article list'
}

async function getArticles() : Promise<Article[]>{
    const articles = await fetchDatas('/post')

    return articles.data
}  

export default async function Page() {

    const articles = await getArticles()

    return (
        <div className="container mx-auto py-16">
            <ArticleList articles={articles} />
        </div>
    )
}