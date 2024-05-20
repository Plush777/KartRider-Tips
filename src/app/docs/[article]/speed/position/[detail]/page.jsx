import { pageNameArray } from "data/docs/learn/speed/position/data";

export async function generateMetadata({ params }) {
    const detail = params.detail;

    pageNameArray.forEach((pageName) => {
        if (detail === pageName) {
            return {
                title: pageName
            }
        }
    });
}

export default function page({ params }) {
    return (
        <>
            {pageNameArray.map((pageName) => {
                return (
                    params.detail === pageName && <div>{pageName}</div>
                )
            })}
        </>
    )
}