import Article from "components/common/Article";
import { getAllArticles } from "scripts/getAllArticles";
import useTranslateTitle from "hooks/useTranslateTitle";

export async function generateMetadata({ params }) {
    const article = params.article;
    const fileName = article[article.length - 1];
    const title = useTranslateTitle(fileName);

    function changeSuffix() {
        if (article.includes('learn')) return '배우기';
        if (article.includes('encyclopedia')) return '도감';
        if (article.includes('faq')) return 'FAQ';
    }

    if (article.length > 1) {
        return {
            title: `${title} - ${changeSuffix()}`
        }
    } 
    
    if (article.length < 2) {
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