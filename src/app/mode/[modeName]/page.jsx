import Mode from "components/pages/Mode"

export const generateMetadata = async ({ params }) => {
    const meta = await import('data/meta/meta.json');

    return {
        title: meta[params.modeName].name,

        openGraph: {
            title: `KartRiderTips | ${meta[params.modeName].name}`,
            images: [
                {
                    url: '/og-mode.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'KartRider Tips Mode',
                }
            ]
        },

        twitter: {
            title: `KartRiderTips | ${meta[params.modeName].name}`,
            images: ['/og-mode.jpg']
        },
    }
}

export default function page({ params, searchParams }) {
    return <Mode params={params} searchParams={searchParams}/>
}