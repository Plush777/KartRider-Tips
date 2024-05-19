import Tech from "components/pages/docs/learn/speed/tech/Tech";

export async function generateMetadata({ params }) {
    const detail = params.detail;

    if (detail === 'grip') {
        return { 
            title: '그립'
        }
    }

    if (detail === 'drift') {
        return {
            title: '드리프트'
        }
    }

    if (detail === 'optimize') {
        return {
            title: '최적화 드리프트'
        }
    }

    if (detail === 'short') {
        return {
            title: '숏 드리프트'
        }
    }

    if (detail === 'full') {
        return {
            title: '풀 드리프트'
        }
    }

    if (detail === 'double') {
        return {
            title: '더블 드리프트'
        }
    }

    if (detail === 'cutting') {
        return {
            title: '커팅 드리프트'
        }
    }

    if (detail === 'twist') {
        return {
            title: '비틀기 드리프트'
        }
    }

    if (detail === 'combo') {
        return {
            title: '연타 드리프트'
        }
    }

    if (detail === 'long') {
        return {
            title: '끌기'
        }
    }

    if (detail === 'spinturn') {
        return {
            title: '스핀턴'
        }
    }

    if (detail === 'shortcut') {
        return {
            title: '숏 커팅'
        }
    }

    if (detail === 'draft') {
        return {
            title: '드래프트'
        }
    }

    return null;
}

export default function page({ params }) {
    return (
        <Tech detail={params.detail} />
    )
}