"use client";

import { MDXRemote } from "next-mdx-remote";
import Division from "components/mdx/Division";
import Paragraph from "components/mdx/paragraph";
import Italic from "components/mdx/Italic";
import Strong from "components/mdx/Strong";
import MdLink from "components/mdx/Link";

const MdxComponents = {
    Link: (props) => (
        <MdLink {...props}/>
    ),
    Division: (props) => (
        <Division {...props}/>
    ),
    Paragraph: (props) => (
        <Paragraph {...props}/>
    ),
    Strong: (props) => (
        <Strong {...props}/>
    ),
    Italic: (props) => (
        <Italic {...props}/>
    )
};

export function MdxContent({ source }){
    return <MDXRemote {...source} components={MdxComponents} />;
}
