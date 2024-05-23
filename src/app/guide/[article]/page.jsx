import { mdxPathPrefix } from "const";
import Article from "components/common/Article";

export async function generateMetadata({ params }) {
    const article = params.article;

    if (article === 'purpose') {
        return {
            title: '사이트 안내'
        }
    }

    if (article === 'contribute') {
        return {
            title: '기여하기'
        }
    }

    return null;
}

export default function page({ params }) {
    return <Article prefix={mdxPathPrefix.guide} slug={params.article} />
}