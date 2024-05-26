"use client";

import { MDXRemote } from "next-mdx-remote";

const MdxComponents = {
    Link: (props) => (
        <a {...props} className="mdLink"/>
    ),
    Ratio: (props) => (
        <div {...props} className="mdRatio"/>
    ),
    Tip: (props) => (
        <div {...props} className="mdTip"/>
    ),
    TipText: (props) => (
        <p {...props} className="mdTipText"/>
    ),
    Strong: (props) => (
        <strong {...props} className="mdStrong"/>
    ),
    Ref: (props) => (
        <i {...props} className="mdRef"/>
    ),
};

export function MdxContent({ source }){
    return <MDXRemote {...source} components={MdxComponents} />;
}
