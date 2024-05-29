import Article from "components/common/Article";
import { getAllArticles } from "scripts/getAllArticles";

export async function generateMetadata({ params }) {
    const article = params.article;

    if (article === 'learn') {
        return {
            title: '배우기'
        }
    }
}

export async function generateStaticParams() {
    const articles = await getAllArticles();

    const slugs = articles.map((article) => ({
        slug: article.slug
    }));

    return slugs;
}

export default async function page({ params }) {
    // console.log(params.article) 

    return <Article slug={params.article}/>
}