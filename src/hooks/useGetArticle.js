import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";

// https://blog.kfirfitousi.com/posts/web-dev/mdx-nextjs-13
export default async function useGetArticle(filepath) {
    const file = await fs.readFile(filepath, 'utf-8');
    
    const serialized = await serialize(file, {
        parseFrontmatter: true,
    });

    const frontmatter = serialized.frontmatter;

    return {
        frontmatter,
        serialized
    }
}