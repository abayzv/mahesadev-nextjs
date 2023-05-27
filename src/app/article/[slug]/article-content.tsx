"use client";

import Image from "next/image";
import { Article, article as articleList } from "../../../../lib/article";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";

export default function ArticleContent({ article }: { article: Article }) {
  const renderDate = (date: string) => {
    const dateObj = new Date(date);
    const day = dateObj.toLocaleString("id", { weekday: "long" });
    const month = dateObj.toLocaleString("id", { month: "long" });
    const year = dateObj.toLocaleString("id", { year: "numeric" });
    return `${day}, ${dateObj.getDate()} ${month} ${year}`;
  };

  const sanitazeText = (text: string) => {
    return DOMPurify.sanitize(text);
  };

  return (
    <div>
      <hr className="mb-5" />
      <div className="lg:flex gap-10">
        <div className="lg:w-2/3">
          <Image
            src={article.image}
            alt={article.title}
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: "10px",
            }}
            className="lg:h-[500px] h-[250px]"
          />
          <h1 className="text-2xl font-bold mt-5">{article.title}</h1>
          <div className="text-orange-500 font-bold text-sm">
            {renderDate(article.date)}
          </div>
          <article
            className="font-serif mt-10 leading-8 flex flex-col space-y-5 text-justify"
            dangerouslySetInnerHTML={{ __html: sanitazeText(article.content) }}
          ></article>
        </div>
        <div className="lg:w-1/3 lg:px-5">
          <div className="bg-white border rounded-md mt-10">
            <div className="bg-orange-500 text-white p-4">Berita Terbaru</div>
            {articleList.map((item, index) => (
              <Link href={`/article/${item.slug}`} key={index}>
                <div className="p-3 border-b flex gap-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                  <div>{item.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
