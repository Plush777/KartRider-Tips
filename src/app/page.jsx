import Main from 'components/pages/Main';

export const metadata = {
    title: 'Kartrider Tips'
}

export default async function page({ videoIds, searchParams }) {
    return <Main videoIds={videoIds} searchParams={searchParams}/>
}