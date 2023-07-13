'use client';

import parse from 'html-react-parser';
import * as Substyled from 'components/style/common/Area.style';
import BtnTop from 'components/article/BtnTop';
import React from 'react'; 
import ImgSkeleton from 'components/article/ImgSkeleton';
import useImageLoading from 'hooks/useImageLoading';
import { useTranslation } from 'react-i18next';
import { Min768 } from 'components/style/mobile/MediaQuery';
import { useSelector } from 'react-redux';
import BtnClipBoard from 'components/article/BtnClipBoard';
import ClipBoardAlert from 'components/article/ClipBoardAlert';

const TimeAttackContents = () => {

    const [loading, handleLoad] = useImageLoading();
    let clipBoardDisplay = useSelector(state => state.toggle.clipBoard);
    const { t } = useTranslation();

    return ( 
        <>
            <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            <Min768>
                <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            </Min768>

            <Substyled.Wrap>
                <Substyled.Inner>
                    <div className="container">
                        <div className="titleArea">
                            <Substyled.Title>{t(`taItem.taDepth1.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{t(`taItem.taDepth1.group1.description`)}</Substyled.Desc>
                            <Substyled.Desc>{t(`taItem.taDepth1.group1.description2`)}</Substyled.Desc>
                        </div>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox type01>
                                <Substyled.SmallTitle>{t(`taItem.taDepth1.group2.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`taItem.taDepth1.group2.description`))}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{parse(t(`taItem.taDepth1.group2.description2`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>
                            <Substyled.ImgBox mt="20px">
                                {loading && (
                                    <ImgSkeleton mwd="none" pt="56.312"/>
                                )}
                                
                                <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-timeattack-challenge-lobby.webp" 
                                alt={t(`taItem.taDepth1.group2.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                <figcaption className="imgCaption">{t(`taItem.taDepth1.group2.caption`)}</figcaption>
                            </Substyled.ImgBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox type01>
                                <Substyled.MediumTitle>{t(`taItem.taDepth1.group3.title`)}</Substyled.MediumTitle>
                                <Substyled.SmallDesc>{parse(t(`taItem.taDepth1.group3.description`))}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{parse(t(`taItem.taDepth1.group3.description2`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>
                            <Substyled.ImgBox mt="20px" ignore2>
                                {loading && (
                                    <ImgSkeleton mwd="none" pt="56.312"/>
                                )}
                                
                                <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-ex-folder.webp" 
                                alt={t(`taItem.taDepth1.group3.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                <figcaption className="imgCaption">{t(`taItem.taDepth1.group3.caption`)}</figcaption>
                            </Substyled.ImgBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox type01>
                                <Substyled.SmallTitle>{t(`taItem.taDepth1.group4.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`taItem.taDepth1.group4.description`))}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{parse(t(`taItem.taDepth1.group4.description2`))}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{parse(t(`taItem.taDepth1.group4.description3`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>
                            <Substyled.ImgBox mt="20px">
                                {loading && (
                                    <ImgSkeleton mwd="none" pt="56.312"/>
                                )}
                                
                                <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-timeattack-ranker-lobby.webp" 
                                alt={t(`taItem.taDepth1.group4.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                <figcaption className="imgCaption">{t(`taItem.taDepth1.group4.caption`)}</figcaption>
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

export default TimeAttackContents;