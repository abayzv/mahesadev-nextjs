import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const articles = [
    {id: 1, title: 'article 1', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', slug: 'article-1', category: 'category 1', thumbnail: 'https://picsum.photos/200/300'},
    {id: 2, title: 'article 2', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', slug: 'article-2', category: 'category 2', thumbnail: 'https://picsum.photos/200/300'},
    {id: 3, title: 'article 3', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', slug: 'article-3', category: 'category 3', thumbnail: 'https://picsum.photos/200/300'},
    {id: 4, title: 'article 4', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', slug: 'article-4', category: 'category 4', thumbnail: 'https://picsum.photos/200/300'},
    {id: 5, title: 'article 5', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', slug: 'article-5', category: 'category 5', thumbnail: 'https://picsum.photos/200/300'},
    {id: 6, title: 'article 6', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', slug: 'article-6', category: 'category 6', thumbnail: 'https://picsum.photos/200/300'},
    {id: 7, title: 'article 7', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', slug: 'article-7', category: 'category 7', thumbnail: 'https://picsum.photos/200/300'},
    {id: 8, title: 'article 8', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', slug: 'article-8', category: 'category 8', thumbnail: 'https://picsum.photos/200/300'},
  ]

   const slug = req.query.slug
    const article = articles.find(article => article.slug === slug)

    if(article){
        res.status(200).json(article)
    }else{
        res.status(404).json({message: `Article not found`})
    }
}