"use client";

import { MDXRemote } from "next-mdx-remote";

const MdxComponents = {

};

export function MdxContent({ source }){
    return <MDXRemote {...source} components={MdxComponents} />;
}
