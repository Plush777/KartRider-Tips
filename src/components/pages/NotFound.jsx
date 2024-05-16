'use client';

import { useRouter } from "next/navigation";
import * as N from 'style/common/NotFound.style';

export default function NotFound() {
    const router = useRouter();

    return ( 
        <N.FlexContainer>
            <N.ImgArea>
                <ErrorImg src="/images/common/img-notfound.webp" alt="에러 이미지" />
            </N.ImgArea>
            <N.TxtArea>
                <ErrorTitle className="errorTitle">찾을 수 없는 페이지입니다.</ErrorTitle>
                <ErrorDesc className="errorDesc">요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하신 것 같아요.</ErrorDesc>
            </N.TxtArea>
            <N.BtnArea>
                <BtnRedirect onClick={() => router.push('/')}>홈으로 이동</BtnRedirect>
            </N.BtnArea>
        </N.FlexContainer>
    );
}