import Kart from "components/pages/Kart"

export const generateMetadata = async ({ params }) => {
    return {
        title: `카트바디 | ${params.listId}`,

        openGraph: {
            title: `KartRiderTips | 카트바디`,
            images: [
                {
                    url: '/og-kart.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'KartRider Tips Kart',
                }
            ]
        },

        twitter: {
            title: `KartRiderTips | 카트바디`,
            images: ['/og-kart.jpg']
        },
    }
}

export default function SubCommonKartbody({ params }) {
    return <Kart params={params}/>
}