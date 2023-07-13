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

const CustomGameContents = () => {

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
                            <Substyled.Title>{t(`cgItem.cgDepth1.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{t(`cgItem.cgDepth1.group1.description`)}</Substyled.Desc>
                            <Substyled.Desc>{t(`cgItem.cgDepth1.group1.description2`)}</Substyled.Desc>
                        </div>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox type01>
                                <Substyled.SmallTitle>{t(`cgItem.cgDepth1.group2.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`cgItem.cgDepth1.group2.description`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.ImgBox mt="20px">
                                {loading && (
                                    <ImgSkeleton mwd="none" pt="56.312"/>
                                )}
                                
                                <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-custom-lobby.webp" 
                                alt={t(`cgItem.cgDepth1.group2.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                <figcaption className="imgCaption">{t(`cgItem.cgDepth1.group2.caption`)}</figcaption>
                            </Substyled.ImgBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox type01 inline>
                                <Substyled.SmallTitle>{t(`cgItem.cgDepth1.group3.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group3.description`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc as="strong">{t(`cgItem.cgDepth1.group3.strong`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group3.description2`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.ImgBox mt="20px">
                                {loading && (
                                    <ImgSkeleton mwd="none" pt="56.312"/>
                                )}
                                
                                <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-custom-entrance.webp" 
                                alt={t(`cgItem.cgDepth1.group3.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                <figcaption className="imgCaption">{t(`cgItem.cgDepth1.group3.caption`)}</figcaption>
                            </Substyled.ImgBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox type01>
                                <Substyled.SmallTitle>{t(`cgItem.cgDepth1.group4.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group4.description`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group4.description2`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>
                            
                            <Substyled.ImgInnerBox>
                                <Substyled.MediumTitle regular>{t(`cgItem.cgDepth1.group4.paltform`)}</Substyled.MediumTitle>
                                <Substyled.ImgBox mt="10px">
                                    {loading && (
                                        <ImgSkeleton mwd="none" pt="56.312"/>
                                    )}
                                    
                                    <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-custom-invite-pc.webp" 
                                    alt={t(`cgItem.cgDepth1.group4.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                    <figcaption className="imgCaption">{t(`cgItem.cgDepth1.group4.caption`)}</figcaption>
                                </Substyled.ImgBox>
                            </Substyled.ImgInnerBox>
                                        
                            <Substyled.ImgInnerBox>
                                <Substyled.MediumTitle regular>{t(`cgItem.cgDepth1.group4.paltform2`)}</Substyled.MediumTitle>
                                <Substyled.ImgBox mt="10px">
                                    
                                    {loading && (
                                        <ImgSkeleton mwd="none" pt="56.312"/>
                                    )}
                                    
                                    <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-custom-invite-mobile.webp" 
                                    alt={t(`cgItem.cgDepth1.group4.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                    <figcaption className="imgCaption">{t(`cgItem.cgDepth1.group4.caption`)}</figcaption>
                                </Substyled.ImgBox>
                            </Substyled.ImgInnerBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox type01>
                                <Substyled.SmallTitle>{t(`cgItem.cgDepth1.group5.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group5.description`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group5.description2`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.ImgInnerBox>
                                <Substyled.MediumTitle regular>{t(`cgItem.cgDepth1.group5.paltform`)}</Substyled.MediumTitle>
                                <Substyled.ImgBox mt="10px">    
                                    
                                    {loading && (
                                        <ImgSkeleton mwd="none" pt="56.312"/>
                                    )}
                                    
                                    <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-custom-master-pc.webp" 
                                    alt={t(`cgItem.cgDepth1.group4.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                    <figcaption className="imgCaption">{t(`cgItem.cgDepth1.group4.caption`)}</figcaption>
                                </Substyled.ImgBox>
                            </Substyled.ImgInnerBox>
                            
                            <Substyled.ImgInnerBox>
                                <Substyled.MediumTitle regular>{t(`cgItem.cgDepth1.group5.paltform2`)}</Substyled.MediumTitle>
                                <Substyled.ImgBox mt="10px">
                                    
                                    {loading && (
                                        <ImgSkeleton mwd="none" pt="56.312"/>
                                    )}
                                    
                                    <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-custom-invite-mobile.webp" 
                                    alt={t(`cgItem.cgDepth1.group4.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                    <figcaption className="imgCaption">{t(`cgItem.cgDepth1.group4.caption`)}</figcaption>
                                </Substyled.ImgBox>
                            </Substyled.ImgInnerBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox type01>
                                <Substyled.SmallTitle>{t(`cgItem.cgDepth1.group6.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group6.description`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.ImgBox ignore mt="10px">
                                {loading && (
                                    <ImgSkeleton mwd="681px" ht="217"/>
                                )}
                                
                                <Substyled.CommonImg className="transparent" ratio="634/357" src="/images/screenShots/img-track.webp" 
                                alt={t(`cgItem.cgDepth1.group6.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                <figcaption className="imgCaption">{t(`cgItem.cgDepth1.group6.caption`)}</figcaption>
                            </Substyled.ImgBox>

                            <Substyled.GroupBox type01 mt>
                                <Substyled.MediumTitle regular>{t(`cgItem.cgDepth1.group6.subTitle`)}</Substyled.MediumTitle>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group6.subDescription`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group6.subDescription2`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox type01 mt>
                                <Substyled.MediumTitle regular>{t(`cgItem.cgDepth1.group6.subTitle2`)}</Substyled.MediumTitle>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group6.subDescription3`)}</Substyled.SmallDesc>
                                <Substyled.SmallDesc>{t(`cgItem.cgDepth1.group6.subDescription4`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>
                        </Substyled.ImgWrap>
                    </div>

                    <BtnClipBoard/>
                    <BtnTop/>
                </Substyled.Inner>
            </Substyled.Wrap>
        </>
        
    );
}

export default CustomGameContents;