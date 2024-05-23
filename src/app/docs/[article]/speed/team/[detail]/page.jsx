import { mdxPathPrefix } from "const";
import { detailPageSuffix } from "const";
import Article from "components/common/Article";

export async function generateMetadata({ params }) {
    const suffix = detailPageSuffix.learn;
    const detail = params.detail;

    if (detail === 'distance') {
        return {
            title: `거리유지 - ${suffix}`
        }
    }

    if (detail === 'runner') {
        return {
            title: `러너 - ${suffix}`
        }
    }

    if (detail === 'middle') {
        return {
            title: `미들 - ${suffix}`
        }
    }

    if (detail === 'sweeper') {
        return {
            title: `스위퍼 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return (
        <Article prefix={mdxPathPrefix.learn} category="speed/team" slug={params.detail} />
    )
}