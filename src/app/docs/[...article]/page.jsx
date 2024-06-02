import Article from "components/common/Article";
import { getAllArticles } from "scripts/getAllArticles";
import useTranslateTitle from "hooks/useTranslateTitle";

export async function generateMetadata({ params }) {
    const article = params.article;
    const fileName = article[article.length - 1];
    const title = useTranslateTitle(fileName);
    // console.log(title)

    let suffix;

    if (article.includes('learn') && article.length > 1) {
        suffix = '배우기';

        return {
            title: `${title} - ${suffix}`
        }
    }

    if (article.includes('learn') && article.length < 2) {

        return {
            title: `${title}`
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