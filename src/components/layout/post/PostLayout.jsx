'use client';

import * as PLay from 'style/layout/PostLayout.style';
import MdxLayout from 'components/mdx/mdx-layout'; 
import { useEffect, useState } from 'react';

export default function PostLayout ({ children }) {
    let [title, setTitle] = useState(null);
    const getTitle = title?.split('|').pop().trim();

    useEffect(() => {
        setTitle(document.title);
    }, [title]);

    return(
        <PLay.Wrap>
            <PLay.Inner>
                <MdxLayout title={getTitle}>
                    {children}
                </MdxLayout>
            </PLay.Inner>
        </PLay.Wrap>
    )
}