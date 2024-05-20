'use client';

import * as T from "style/components/sub/TopNavigation.style"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { changeLink } from "data/topNavigation";
import { useEffect, useState } from "react";

export default function TopNavigation() {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(null);
    const pathnameArray = pathname.split('/').filter((path) => path);
    const lastPathname = pathnameArray[pathnameArray.length - 1];

    useEffect(() => {
        setCurrentPath(changeLink(pathnameArray, lastPathname));
    }, []);
   
    return(
        <T.Wrap>
            <T.Inner>
                <T.List>
                    {pathnameArray.map((link, index) => {
                        return(
                            <T.Item key={index}>
                                <Link href={`/${link}`}>{currentPath}</Link>
                            </T.Item>
                        )
                    })}
                </T.List>
            </T.Inner>
        </T.Wrap>
    )
}