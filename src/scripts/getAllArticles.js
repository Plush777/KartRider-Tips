import { sync } from 'glob';
import path from 'path';

export async function getAllArticles(dir) {
    const articlePaths = sync(path.join(process.cwd(), `src/markdown/docs/${dir}/*.mdx`));
    // console.log(articlePaths);

    const paths = articlePaths.map((path) => {
        /* 
            현재 경로에서 src/markdown/docs 와 .mdx 확장자를 정규식으로 제거하고,
            리턴할 때 slug로 반환하면서 경로를 다시 추가합니다.
            * src/markdown/docs는 고정 경로이고, 그 이후 경로들은 동적으로 변하는 경로이기 때문.
        */
        const result = path.replace(/^.*src\/markdown\/docs\//, '').replace(/\.mdx$/, '');
        // console.log(result);
        
        return {
            slug: `src/markdown/docs/${result}`
        }
    });

    // console.log(paths);

    return paths;
}