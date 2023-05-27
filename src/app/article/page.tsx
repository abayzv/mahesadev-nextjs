import ArticleList from "./article-list"
import { Metadata } from "next"
import { article } from "../../../lib/article"

export const metadata: Metadata = {
    title: 'News',
    description: 'Temukan berita terbaru seputar teknologi, bisnis, dan startup di Indonesia'
}

export default async function Page() {

    return (
        <div className="container mx-auto py-16">
            <ArticleList articles={article} />
        </div>
    )
}