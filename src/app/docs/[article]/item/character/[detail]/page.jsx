import { mdxPathPrefix } from "const";
import Article from "components/common/Article";
import { detailPageSuffix } from "const";

export async function generateMetadata({ params }) {
    const detail = params.detail;
    const suffix = detailPageSuffix.learn;

    if (detail === 'dao') {
        return {
            title: `다오 - ${suffix}`
        }
    }

    if (detail === 'bazzi') {
        return {
            title: `배찌 - ${suffix}`
        }
    }

    if (detail === 'brodi') {
        return {
            title: `브로디 - ${suffix}`
        }
    }

    if (detail === 'diz') {
        return {
            title: `디지니 - ${suffix}`
        }
    }

    if (detail === 'marid') {
        return {
            title: `마리드 - ${suffix}`
        }
    }

    if (detail === 'kris') {
        return {
            title: `크리스 - ${suffix}`
        }
    }

    if (detail === 'neo') {
        return {
            title: `네오 - ${suffix}`
        }
    }

    if (detail === 'sophia') {
        return {
            title: `소피아 - ${suffix}`
        }
    }

    if (detail === 'mos') {
        return {
            title: `모스 - ${suffix}`
        }
    }

    if (detail === 'uni') {
        return {
            title: `우니 - ${suffix}`
        }
    }

    if (detail === 'airi') {
        return {
            title: `아이리 - ${suffix}`
        }
    }

    if (detail === 'ethen') {
        return {
            title: `에띠 - ${suffix}`
        }
    }

    if (detail === 'rex') {
        return {
            title: `렉스 - ${suffix}`
        }
    }

    if (detail === 'keffy') {
        return {
            title: `케피 - ${suffix}`
        }
    }

    if (detail === 'brian') {
        return {
            title: `브라이언 - ${suffix}`
        }
    }

    if (detail === 'rave') {
        return {
            title: `레이브 - ${suffix}`
        }
    }

    if (detail === 'vivi') {
        return {
            title: `비비 - ${suffix}`
        }
    }

    if (detail === 'pim') {
        return {
            title: `휘 - ${suffix}`
        }
    }

    if (detail === 'tobi') {
        return {
            title: `토비 - ${suffix}`
        }
    }

    if (detail === 'miso') {
        return {
            title: `미소 - ${suffix}`
        }
    }

    if (detail === 'tiera') {
        return {
            title: `티이라 - ${suffix}`
        }
    }

    if (detail === 'lodumani') {
        return {
            title: `로두마니 - ${suffix}`
        }
    }

    if (detail === 'derek') {
        return {
            title: `데릭 - ${suffix}`
        }
    }

    if (detail === 'orion') {
        return {
            title: `오리온 - ${suffix}`
        }
    }

    if (detail === 'mobi') {
        return {
            title: `모비 - ${suffix}`
        }
    }

    if (detail === 'toto') {
        return {
            title: `투투 - ${suffix}`
        }
    }

    if (detail === 'martin') {
        return {
            title: `마틴 - ${suffix}`
        }
    }

    if (detail === 'rena') {
        return {
            title: `레나 - ${suffix}`
        }
    }

    if (detail === 'draki') {
        return {
            title: `드라키 - ${suffix}`
        }
    }

    if (detail === 'spiritkid') {
        return {
            title: `꼬마유령 - ${suffix}`
        }
    }

    if (detail === 'mayorzipi') {
        return {
            title: `지피시장 - ${suffix}`
        }
    }

    if (detail === 'viktor') {
        return {
            title: `투탑 - ${suffix}`
        }
    }

    if (detail === 'raptorL') {
        return {
            title: `랍토르 L - ${suffix}`
        }
    }

    if (detail === 'raptorR') {
        return {
            title: `랍토르 R - ${suffix}`
        }
    }

    if (detail === 'taki') {
        return {
            title: `타키 - ${suffix}`
        }
    }

    if (detail === 'erini') {
        return {
            title: `에리니 - ${suffix}`
        }
    }

    if (detail === 'rivaski') {
        return {
            title: `리바스키 - ${suffix}`
        }
    }

    if (detail === 'lucid') {
        return {
            title: `루시드 - ${suffix}`
        }
    }

    if (detail === 'pinkbean') {
        return {
            title: `핑크빈 - ${suffix}`
        }
    }
}

export default function page({ params }) {
    return <Article prefix={mdxPathPrefix.learn} category="item/character" slug={params.detail} />
}