'use client';

import * as G from "style/components/header/Gnb.style";
import { menus } from "data/gnb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Gnb() {
    const pathname = usePathname();

    return(
        <G.Gnb>
            <G.GnbList>
                {menus.map((menu) => {
                    return(
                        <G.GnbItem className={pathname === menu.path && 'active'} key={menu.id}>
                            <Link href={`/${menu.path}`}>{menu.name}</Link>
                        </G.GnbItem>
                    )
                })}
            </G.GnbList>
        </G.Gnb>
    )
}