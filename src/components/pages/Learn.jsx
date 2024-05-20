'use client';

import DefaultLayout from "components/layout/common/DefaultLayout";
import LearnMDX from "markdown/learn/Learn.mdx";

export default function Learn(){
    return(
        <DefaultLayout type="sub">
            <LearnMDX/>
        </DefaultLayout>
    )
}