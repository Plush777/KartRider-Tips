import { mdxPathPrefix } from "const";
import Article from "components/common/Article";
import { detailPageSuffix } from "const";

export async function generateMetadata({ params }) {
    const detail = params.detail;
    const suffix = detailPageSuffix.learn;

    if (detail === 'booster') {
        return {
            title: `부스터 - ${suffix}`
        }
    }

    if (detail === 'magnet') {
        return {
            title: `자석 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return <Article prefix={mdxPathPrefix.learn} category="item/acceleration" slug={params.detail} />
}