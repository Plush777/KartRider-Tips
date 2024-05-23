import { mdxPathPrefix } from "const";
import Article from "components/common/Article";
import { detailPageSuffix } from "const";

export async function generateMetadata({ params }) {
    const detail = params.detail;
    const suffix = detailPageSuffix.learn;

    if (detail === 'sirenplus') {
        return {
            title: `강화 사이렌 - ${suffix}`
        }
    }

    if (detail === 'bunchwaterbomb') {
        return {
            title: `다발 물폭탄 - ${suffix}`
        }
    }

    if (detail === 'book') {
        return {
            title: `책 - ${suffix}`
        }
    }

    if (detail === 'bombard') {
        return {
            title: `폭격 폭탄 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return <Article prefix={mdxPathPrefix.learn} category="item/special" slug={params.detail} />
}