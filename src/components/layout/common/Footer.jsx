'use client';

import * as Footerstyled from 'style/layout/Footer.style';
import Link from 'next/link';
import { M500 } from 'components/config/MediaQuery';
import Image from 'next/image';
import Select from 'components/common/Select';

export default function Footer() {
    const copyYear = new Date().getFullYear();

    return (  
        <Footerstyled.FooterWrap>
            <Footerstyled.FooterInner>
                <Footerstyled.LogoArea>
                    <Image src={'/ico-kart-logo-grayscale.svg'} width={86} height={24} alt="카트라이더 팁스 로고"/>
                </Footerstyled.LogoArea>
                <Footerstyled.CopyRightArea>
                    <Footerstyled.Copy><time>{copyYear}</time>&nbsp;KARTRIDER TIPS</Footerstyled.Copy>
                </Footerstyled.CopyRightArea>
                
                <Footerstyled.BottomArea>
                    <Footerstyled.BottomMenu> 
                        <Footerstyled.BottomItem as="li">
                            <Link href="/purpose">사이트 안내</Link>
                        </Footerstyled.BottomItem>
                        <Footerstyled.BottomItem as="li">
                            <a href="https://forms.gle/4i8vvDYz9VbLbJGN9" target="_blank" rel="noopener noreferrer">피드백</a>
                        </Footerstyled.BottomItem>
                        <Footerstyled.BottomItem as="li">
                            <Link href="/contribute">기여하기</Link>
                        </Footerstyled.BottomItem>
                    </Footerstyled.BottomMenu>
                </Footerstyled.BottomArea>

                <M500>
                    <Footerstyled.BottomLogoArea>
                        <Image src={'/ico-footer-logo-grayscale.svg'} width={24} height={24} alt="카트라이더 팁스 로고"/>
                        <Footerstyled.BottomLogoTxt>{copyYear} KARTRIDER TIPS</Footerstyled.BottomLogoTxt>
                    </Footerstyled.BottomLogoArea>
                </M500>
            </Footerstyled.FooterInner>

            
            <Footerstyled.Row>
                <Select data="sites" width="190px" height="36px" />
            </Footerstyled.Row>
        </Footerstyled.FooterWrap>
    );
}