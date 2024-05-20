'use client';

import { MDXRemote } from "next-mdx-remote";

const MdxComponents = {

}

export default function MdxContent({ source }) {
    return (
        <MDXRemote {...source} components={MdxComponents} />
    )
}