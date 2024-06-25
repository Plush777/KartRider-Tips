'use client';

import * as G from "style/components/header/Gnb.style";
import { menus } from "data/gnb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useClickAlert from "hooks/useClickAlert";

export default function Gnb() {
    const pathname = usePathname();
    const clickAlert = useClickAlert('준비중입니다.');

    /* 
        1. 현재 경로들을 배열로 만듭니다
        2. 배열 값 중에서 0번째와 1번째 값을 가져옵니다
        3. 가져온 값들을 문자열로 합치고, 앞에 '/'를 붙여줍니다.
        4. 가져온 경로와 menus 데이터 경로를 서로 맞는지 비교합니다.
    */
    const pathnameArray = pathname.split('/').filter((path) => path);
    const myPathArray = pathnameArray.slice(0, 2);
    const myPath = `/${myPathArray.join('/')}`

    return(
        <G.Gnb>
            <G.GnbList>
                {menus.map((menu) => {
                    return(
                        <G.GnbItem className={`disabled ${myPath === menu.path && 'active'}`} key={menu.id}>
                            <Link onClick={clickAlert} href={`${menu.path}`}>{menu.name}</Link>
                        </G.GnbItem>
                    )
                })}
            </G.GnbList>
        </G.Gnb>
    )
}