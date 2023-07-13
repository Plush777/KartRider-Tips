import Character from "components/pages/Character";

export const generateMetadata = async ({ params }) => {
    const meta = await import('data/meta/meta.json');

    return {
        title: `캐릭터 | ${meta[params.characterName].name}`,

        openGraph: {
            title: `KartRiderTips | ${meta[params.characterName].name}`,
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
            title: `KartRiderTips | ${meta[params.characterName].name}`,
            images: ['/og-character.jpg']
        },
    }
}

export default function page({ params }) {
    return <Character params={params}/>
}

