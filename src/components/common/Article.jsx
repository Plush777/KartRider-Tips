import useGetArticle from "hooks/useGetArticle";
import { format } from "date-fns";

import { MdxContent } from "app/mdx-content";

export default async function Article({ prefix, category, slug }) {
    const { serialized, frontmatter } = await useGetArticle(`${prefix}${category}/${slug}.mdx`);

    return(
        <>  
            <h2>{frontmatter.title}</h2>
            <MdxContent source={serialized} />

            <div className="articleDates">
                {frontmatter.date &&
                    <span className="issuedDate">
                        <span className="articleDateText">작성일자 :</span>
                        <time dateTime={frontmatter.date}>{format(frontmatter.date, "yyyy년 MM월 dd일")}</time>
                    </span>
                }

                {frontmatter.lastUpdated &&
                    <span className="lastUpdated">
                        <span className="articleDateText">마지막 업데이트 :</span>
                        <time dateTime={frontmatter.lastUpdated}>{format(frontmatter.lastUpdated, "yyyy년 MM월 dd일")}</time>
                    </span>
                }
            </div>
        </>
    )
}