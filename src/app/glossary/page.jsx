import Glossary from "components/pages/Glossary"

export const metadata = {
    title: '용어사전',
    openGraph: {
        title: 'KartRider Tips | 용어사전',
        images: [
            {
                url: '/og-glossary.jpg',
                width: 1200,
                height: 630,
                alt: 'KartRider Tips | 용어사전',
            }
        ]
    },

    twitter: {
        title: 'KartRider Tips | 용어사전',
        images: ['/og-glossary.jpg']
    }
}

export default function page() {
    return <Glossary/>
}