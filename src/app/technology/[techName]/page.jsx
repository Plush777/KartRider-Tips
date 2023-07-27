import Tech from "components/pages/Tech";

export const generateMetadata = async ({ params }) => {
    const meta = await import('data/meta/meta.json');

    return {
        title: meta[params.techName].name,

        openGraph: {
            title: `KartRiderTips | ${meta[params.techName].name}`,
            images: [
                {
                    url: '/og-tech.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'KartRider Tips Tech',
                }
            ]
        },

        twitter: {
            title: `KartRiderTips | ${meta[params.techName].name}`,
            images: ['/og-tech.jpg']
        },
    }
}

export default function page({ params, searchParams }) {
    return <Tech params={params} searchParams={searchParams}/>
}