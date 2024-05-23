import { mdxPathPrefix } from "const";
import Article from "components/common/Article";
import { detailPageSuffix } from "const";

export async function generateMetadata({ params }) {
    const detail = params.detail;
    const suffix = detailPageSuffix.learn;

    if (detail === 'item') {
        return {
            title: `아이템전 - ${suffix}`
        }
    }

    if (detail === 'speed') {
        return {
            title: `스피드전전 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return <Article prefix={mdxPathPrefix.learn} category="tuning" slug={params.detail} />
}