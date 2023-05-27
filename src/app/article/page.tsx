import ArticleList from "./article-list";
import { Metadata } from "next";
import { article } from "../../../lib/article";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News",
  description:
    "Temukan berita terbaru seputar teknologi, bisnis, dan startup di Indonesia",
};

export default async function Page() {
  return (
    <div>
      <div className="mb-10"><Link href="/" >Home</Link> / <span className="text-orange-500 text-lg font-medium">News</span></div>
      <div>
        <ArticleList articles={article} />
      </div>
    </div>
  );
}
