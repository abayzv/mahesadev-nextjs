import Image from "next/image"
import { Metadata } from "next"
import ArticleContent from "./article-content"
import {fetchDatas} from "../../../../api"

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

async function getArticle(slug: string) : Promise<Article> {
    const article = await fetchDatas(`/post/${slug}`)
    return article
}

export async function generateMetadata({params}: {params: {slug: string}}) {
    const {slug} = params
    const article = await getArticle(slug)

    return {
      title: article.text,
      description: article.text,
    };
  }

export default async function Article({params}: {params: {slug: string}}){
    const {slug} = params
    const article = await getArticle(slug)
    
    return (
        <div>
            <ArticleContent article={article} />
        </div>
    )
}