import { mdxPathPrefix } from "const";
import Article from "components/common/Article";
import { detailPageSuffix } from "const";

export async function generateMetadata({ params }) {
    const detail = params.detail;
    const suffix = detailPageSuffix.learn;

    if (detail === 'electromagnetic') {
        return {
            title: `전자파 - ${suffix}`
        }
    }

    if (detail === 'shield') {
        return {
            title: `실드 - ${suffix}`
        }
    }

    if (detail === 'angel') {
        return {
            title: `천사 - ${suffix}`
        }
    }

    if (detail === 'scanner') {
        return {
            title: `스캐너 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return <Article prefix={mdxPathPrefix.learn} category="item/defence" slug={params.detail} />
}