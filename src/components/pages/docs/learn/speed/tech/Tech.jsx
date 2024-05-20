'use client';

import GripMDX from "markdown/docs/learn/speed/tech/grip.mdx";
import DriftMDX from "markdown/docs/learn/speed/tech/drift.mdx";
import OptimizeMDX from "markdown/docs/learn/speed/tech/optimize.mdx";
import ShortMDX from "markdown/docs/learn/speed/tech/short.mdx";
import FullMDX from "markdown/docs/learn/speed/tech/full.mdx";
import DoubleMDX from "markdown/docs/learn/speed/tech/double.mdx";
import CuttingMDX from "markdown/docs/learn/speed/tech/cutting.mdx";
import TwistMDX from "markdown/docs/learn/speed/tech/twist.mdx";
import ComboMDX from "markdown/docs/learn/speed/tech/combo.mdx";
import LongMDX from "markdown/docs/learn/speed/tech/long.mdx";
import SpinturnMDX from "markdown/docs/learn/speed/tech/spinturn.mdx";
import ShortcutMDX from "markdown/docs/learn/speed/tech/shortcut.mdx";
import DraftMDX from "markdown/docs/learn/speed/tech/draft.mdx";

export default function Tech({ detail }){
    const renderMDX = () => {
        if (detail === 'grip') return <GripMDX />;
        if (detail === 'drift') return <DriftMDX />;
        if (detail === 'optimize') return <OptimizeMDX />;
        if (detail === 'short') return <ShortMDX />;
        if (detail === 'full') return <FullMDX />;
        if (detail === 'double') return <DoubleMDX />;
        if (detail === 'cutting') return <CuttingMDX />;
        if (detail === 'twist') return <TwistMDX />;
        if (detail === 'combo') return <ComboMDX />;
        if (detail === 'long') return <LongMDX />;
        if (detail === 'spinturn') return <SpinturnMDX />;
        if (detail === 'shortcut') return <ShortcutMDX />;
        if (detail === 'draft') return <DraftMDX />;

        return null;
    }

    return(
        <>
             {renderMDX()}
        </>
    )
}