import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { promises as fs } from "fs";

// https://blog.kfirfitousi.com/posts/web-dev/mdx-nextjs-13
export default async function useGetArticle(filepath, slug) {
    const workDir = process.cwd();
    const file = path.join(workDir, filepath, `/${slug}.mdx`);

    const source = await fs.readFile(file, 'utf8');
    
    const serialized = await serialize(source, {
        parseFrontmatter: true,
    });

    const frontmatter = serialized.frontmatter;

    return {
        frontmatter,
        serialized
    }
}