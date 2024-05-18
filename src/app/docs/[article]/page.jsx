import Learn from "components/pages/Learn";

export async function generateMetadata({ params }) {
    const article = params.article;

    if (article === 'learn') {
        return {
            title: '배우기'
        }
    }
}

export default function page({ params }) {
    return (
        <>
            {params.article === 'learn' && <Learn />}
        </>
    )
}