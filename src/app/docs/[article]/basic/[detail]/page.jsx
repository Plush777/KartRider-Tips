import { mdxPathPrefix } from "const";
import Article from "components/common/Article";
import { detailPageSuffix } from "const";

export async function generateMetadata({ params }) {
    const detail = params.detail;
    const suffix = detailPageSuffix.learn;

    if (detail === 'startbooster') {
        return {
            title: `출발 부스터 - ${suffix}`
        }
    }

    if (detail === 'grip') {
        return {
            title: `그립 - ${suffix}`
        }
    }

    if (detail === 'drift') {
        return {
            title: `드리프트 - ${suffix}`
        }
    }

    if (detail === 'combobooster') {
        return {
            title: `순간 부스터 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return <Article prefix={mdxPathPrefix.learn} category="basic" slug={params.detail} />
}