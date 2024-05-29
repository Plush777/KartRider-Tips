import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import { getArticles } from "scripts/getArticles";

/* Article.jsx에서 slug 배열을 받아와서 파일명이 어떤 것이냐에 따라 src/docs/markdown 이후 dir (마크다운 파일경로) 를 결정합니다. */
function markdownDirCondition(slugArray) {
    if (slugArray.includes('learn') && slugArray.length < 2) return 'learn/home';
    if (slugArray.includes('basic')) return 'learn/basic';
}

export default async function useGetArticle(slugArray) {
    // console.log(slugArray);
   
    const last = slugArray[slugArray.length - 1];
    slugArray.length > 1 && slugArray.pop();

    const mySlugArray = slugArray;
    // console.log(mySlugArray);
    
    const dir = markdownDirCondition(mySlugArray);

    // console.log(dir);

    /* getArticles 함수에 받아온 dir (경로) 와 last (파일명) 도 같이 넘겨줍니다.  */
    const articlePath = await getArticles(dir, last);
    const articlePathFileSlug = articlePath;
    const file = fs.readFileSync(`${articlePathFileSlug}.mdx`, "utf8");
    
    const serialized = await serialize(file, {
        parseFrontmatter: true,
    });

    const frontmatter = serialized.frontmatter;

    return {
        frontmatter,
        serialized
    }
}