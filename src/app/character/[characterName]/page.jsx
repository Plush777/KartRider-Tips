import Character from "components/pages/Character";

export const generateMetadata = async ({ params }) => {
    const meta = await import('data/meta/meta.json');

    return {
        title: `캐릭터 | ${meta[params.characterName].name}`,

        openGraph: {
            title: `KartRiderTips | ${meta[params.characterName].name}`,
        },

        twitter: {
            title: `KartRiderTips | ${meta[params.characterName].name}`,
        },
    }
}

export const metadata = {
    openGraph: {
        images: [
            {
                url: '/og-character.jpg',
                width: 1200,
                height: 630,
                alt: 'KartRider Tips Character',
            }
        ]
    },

    twitter: {
        images: ['/og-character.jpg']
    },
}

const SubCommonCharacter = ({ params }) => {
    return <Character params={params}/>
}

export default SubCommonCharacter;