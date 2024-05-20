import { mdxPathPrefix } from "const";
import Article from "components/common/Article";

export async function generateMetadata({ params }) {
    const article = params.article;

    if (article === 'learn') {
        return {
            title: '배우기'
        }
    }
}

export default function page({ params }) {
    return <Article prefix={mdxPathPrefix.learn} slug={params.article} />
}