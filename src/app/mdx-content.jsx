"use client";

import { MDXRemote } from "next-mdx-remote";
import Division from "components/mdx/Division";
import Paragraph from "components/mdx/Paragraph";
import Italic from "components/mdx/Italic";
import Strong from "components/mdx/Strong";
import MdLink from "components/mdx/Link";
import Blockquote from "components/mdx/Blockquote";
import Img from "components/mdx/Img";
import Sprite from "components/mdx/Sprite";

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
    ),
    Bq: (props) => (
        <Blockquote {...props}/>
    ),
    Img: (props) => (
        <Img {...props}/>
    ),
    Sprite: (props) => (
        <Sprite {...props}/>
    ),
};

export function MdxContent({ source }){
    return <MDXRemote {...source} components={MdxComponents} />;
}
