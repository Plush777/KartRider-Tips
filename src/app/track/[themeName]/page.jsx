import Track from 'components/pages/Track';

export const generateMetadata = async ({ params }) => {
    const meta = await import('data/meta/meta.json');

    return {
        title: meta[params.themeName].name,

        openGraph: {
            title: `KartRiderTips | ${meta[params.themeName].name}`,
            images: [
                {
                    url: '/og-track.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'KartRider Tips Track',
                }
            ]
        },

        twitter: {
            title: `KartRiderTips | ${meta[params.themeName].name}`,
            images: ['/og-track.jpg']
        },
    }
}

export default function page({ params, searchParams }) {
    return <Track params={params} searchParams={searchParams}/>
}