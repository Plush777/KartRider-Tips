import { mdxPathPrefix } from "const";
import { detailPageSuffix } from "const";
import Article from "components/common/Article";

export async function generateMetadata({ params }) {
    const suffix = detailPageSuffix.learn;
    const detail = params.detail;

    if (detail === 'optimize') {
        return {
            title: `최적화 드리프트 - ${suffix}`
        }
    }

    if (detail === 'short') {
        return {
            title: `숏 드리프트 - ${suffix}`
        }
    }

    if (detail === 'full') {
        return {
            title: `풀 드리프트 - ${suffix}`
        }
    }

    if (detail === 'double') {
        return {
            title: `더블 드리프트 - ${suffix}`
        }
    }

    if (detail === 'cutting') {
        return {
            title: `커팅 드리프트 - ${suffix}`
        }
    }

    if (detail === 'twist') {
        return {
            title: `비틀기 드리프트 - ${suffix}`
        }
    }

    if (detail === 'combo') {
        return {
            title: `연타 드리프트 - ${suffix}`
        }
    }

    if (detail === 'long') {
        return {
            title: `끌기 - ${suffix}`
        }
    }

    if (detail === 'spinturn') {
        return {
            title: `스핀턴 - ${suffix}`
        }
    }

    if (detail === 'shortcut') {
        return {
            title: `숏 커팅 - ${suffix}`
        }
    }

    if (detail === 'draft') {
        return {
            title: `드래프트 - ${suffix}`
        }
    }

    if (detail === 'twobooster') {
        return {
            title: `투 부스터 - ${suffix}`
        }
    }

    if (detail === 'comboCancel') {
        return {
            title: `순간 부스터 캔슬 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return (
        <Article prefix={mdxPathPrefix.learn} category="speed/tech" slug={params.detail} />
    )
}