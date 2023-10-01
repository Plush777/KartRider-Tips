'use client';

import parse from 'html-react-parser';
import * as Skeletonstyled from 'components/style/common/Skeleton.style';
import * as Substyled from 'components/style/common/Area.style';
import BtnTop from 'components/article/BtnTop';
import React from 'react'; 
import ImgSkeleton from 'components/article/ImgSkeleton';
import useImageLoading from 'hooks/useImageLoading';
import BtnClipBoard from 'components/article/BtnClipBoard';
import ClipBoardAlert from 'components/article/ClipBoardAlert';
import { useSelector } from 'react-redux';
import { Min768 } from 'components/style/mobile/MediaQuery';
import { useTranslation } from 'react-i18next';

const GripContents = ({ gripData }) => {

    const [loading, handleLoad] = useImageLoading();
    let clipBoardDisplay = useSelector(state => state.toggle.clipBoard);
    const { t } = useTranslation();
    const gripImages = ['../../../images/common/img-tech-ex01.webp']

    return ( 
        <>
            <Min768>
                <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            </Min768>

            <Substyled.Wrap>
                <Substyled.Inner>
                    <div className="container">
                        <div className="titleArea">
                            <Substyled.Title>{t(`techGrip.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{t(`techGrip.group1.desc`)}</Substyled.Desc>
                        </div>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`techGrip.group2.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{t(`techGrip.group2.desc`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.ImgBox mt="20px">
                                <ImgSkeleton mwd="none" pt="56.312"/>
                                {/* video */}
                            </Substyled.ImgBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox type01>
                                <Substyled.SmallTitle>{t(`techGrip.group3.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{t(`techGrip.group3.desc`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{t(`techGrip.group3.desc2`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{t(`techGrip.group3.desc3`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc className='mt'>{t(`techGrip.group3.desc4`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc className='mt'>{t(`techGrip.group3.desc5`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{t(`techGrip.group3.desc6`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc className='mt'>{parse(t(`techGrip.group3.desc7`))}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{parse(t(`techGrip.group3.desc8`))}</Substyled.SmallDesc>
                                <Substyled.SmallDesc className='mt'>{t(`techGrip.group3.desc9`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.ImgBox mt="20px">
                                {loading && (
                                    <ImgSkeleton mwd="none" pt="56.312"/>
                                )}
                                <Substyled.CommonImg ratio="1275/718" src={gripImages[0]} 
                                alt={t(`techGrip.group3.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                <figcaption className="imgCaption">{t(`techGrip.group3.caption`)}</figcaption>
                            </Substyled.ImgBox>

                            <Substyled.GroupBox type01 mt>
                                <Substyled.SmallDesc>{t(`techGrip.group3.desc10`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{t(`techGrip.group3.desc11`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc className='mt'>{t(`techGrip.group3.desc12`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{t(`techGrip.group3.desc13`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc as="div">
                                    <Substyled.ColorDiv className='source' as="a" target="_blank" href="https://gall.dcinside.com/mgallery/board/view/?id=kartriderdrift&no=26559" fontStyle="italic">{t(`techGrip.group3.source`)}</Substyled.ColorDiv>
                                </Substyled.SmallDesc>
                            </Substyled.GroupBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`techGrip.group4.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{t(`techGrip.group4.desc`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            {loading && <ImgSkeleton mwd="none" pt="56.312"/>}
                            <Substyled.ImgBox mt="20px" iframeRes activeDisplay={loading ? 'none' : 'block'} onLoad={handleLoad}>
                                <Substyled.VideoFrame src="https://www.veed.io/embed/17f0ef60-ec8b-4f41-9ae2-5c9c032a7ce2" allowFullScreen/>
                            </Substyled.ImgBox>
                        </Substyled.ImgWrap>

                    </div>
                    <BtnClipBoard/>
                    <BtnTop/>
                </Substyled.Inner>
                
            </Substyled.Wrap>
        </>
     );
}

export default GripContents;