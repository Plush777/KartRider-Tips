import { mdxPathPrefix } from "const";
import Article from "components/common/Article";
import { detailPageSuffix } from "const";

export async function generateMetadata({ params }) {
    const detail = params.detail;
    const suffix = detailPageSuffix.learn;

    if (detail === 'ballon') {
        return {
            title: `풍선 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return <Article prefix={mdxPathPrefix.learn} category="item/wear" slug={params.detail} />
}