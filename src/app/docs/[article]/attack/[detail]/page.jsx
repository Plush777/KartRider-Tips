import { mdxPathPrefix } from "const";
import Article from "components/common/Article";
import { detailPageSuffix } from "const";

export async function generateMetadata({ params }) {
    const detail = params.detail;
    const suffix = detailPageSuffix.learn;

    if (detail === 'banana') {
        return {
            title: `바나나 - ${suffix}`
        }
    }
    if (detail === 'bigbanana') {
        return {
            title: `대왕 바나나 - ${suffix}`
        }
    }
    
    if (detail === 'baricade') {
        return {
            title: `바리케이드 - ${suffix}`
        }
    }

    if (detail === 'waterbomb') {
        return {
            title: `물폭탄 - ${suffix}`
        }
    }

    if (detail === 'waterfly') {
        return {
            title: `물파리 - ${suffix}`
        }
    }

    if (detail === 'missile') {
        return {
            title: `미사일 - ${suffix}`
        }
    }

    if (detail === '1stmissile') {
        return {
            title: `1등 미사일 - ${suffix}`
        }
    }

    if (detail === 'thunderbolt') {
        return {
            title: `벼락 - ${suffix}`
        }
    }

    if (detail === 'spaceship') {
        return {
            title: `우주선 - ${suffix}`
        }
    }

    if (detail === 'siren') {
        return {
            title: `사이렌 - ${suffix}`
        }
    }

    if (detail === 'landmine') {
        return {
            title: `지뢰 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return <Article prefix={mdxPathPrefix.learn} category="item/attack" slug={params.detail} />
}