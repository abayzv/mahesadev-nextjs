import Image from "next/image";
import { Metadata } from "next";
import ArticleContent from "./article-content";
import { article as articleData, Article } from "../../../../lib/article";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // get article by slug from articleData
  const article = articleData.find(
    (article) => article.slug === slug
  ) as Article;

  return {
    title: article.title,
    description: article.title,
  };
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const article = articleData.find(
    (article) => article.slug === slug
  ) as Article;

  return (
    <div>
      <div className="mb-5">
        <Link href="/">Home</Link> /{" "}
        <Link href="/article">News</Link> /{" "}
        <span className="text-orange-500 font-medium">{article.title}</span>
      </div>
      <ArticleContent article={article} />
    </div>
  );
}
