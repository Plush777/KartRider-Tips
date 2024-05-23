import { mdxPathPrefix } from "const";
import { detailPageSuffix } from "const";
import Article from "components/common/Article";

export async function generateMetadata({ params }) {
    const suffix = detailPageSuffix.learn;
    const detail = params.detail;

    if (detail === 'defence') {
        return {
            title: `디펜스 - ${suffix}`
        }
    }

    if (detail === 'straight') {
        return {
            title: `직진 부스터 - ${suffix}`
        }
    }

    if (detail === 'deliberate') {
        return {
            title: `고의 삽 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return (
        <Article prefix={mdxPathPrefix.learn} category="speed/struggle" slug={params.detail} />
    )
}