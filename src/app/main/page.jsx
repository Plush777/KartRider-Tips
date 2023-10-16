import Main from 'components/pages/Main';

export const metadata = {
    title: '메인',
}

export default function page({ videoIds }) {
    return <Main videoIds={videoIds}/>
}