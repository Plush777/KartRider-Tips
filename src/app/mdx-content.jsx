"use client";

import { MDXRemote } from "next-mdx-remote";

const MdxComponents = {
    Link: (props) => (
        <a {...props} className="mdLink"/>
    ),
    Ratio: (props) => (
        <div {...props} className="mdRatio"/>
    )
};

export function MdxContent({ source }){
    return <MDXRemote {...source} components={MdxComponents} />;
}
