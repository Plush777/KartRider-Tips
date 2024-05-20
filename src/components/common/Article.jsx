import useGetArticle from "hooks/useGetArticle";
import { format } from "date-fns";

import { MdxContent } from "app/mdx-content";

export default async function Article({ prefix, slug }) {
    const { serialized, frontmatter } = await useGetArticle(`${prefix}${slug}.mdx`);

    return(
        <>
            <h2>{frontmatter.title}</h2>
            <time>{format(frontmatter.date, "yyyy년MM월dd일")}</time>
            <time>{format(frontmatter.lastUpdated, "yyyy년MM월dd일")}</time>
            <MdxContent source={serialized} />
        </>
    )
}