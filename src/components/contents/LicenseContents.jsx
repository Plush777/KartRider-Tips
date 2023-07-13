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

const LicenseContents = ({ licenseData }) => {

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
                            <Substyled.Title>{t(`lcItem.lcDepth1.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{t(`lcItem.lcDepth1.group1.description`)}</Substyled.Desc>
                        </div>
                    </div>

                    <Substyled.ImgWrap>
                        <Substyled.GroupBox type01>
                            <Substyled.SmallTitle>{t(`lcItem.lcDepth1.group2.title`)}</Substyled.SmallTitle>
                            <Substyled.SmallDesc>{parse(t(`lcItem.lcDepth1.group2.description`))}</Substyled.SmallDesc>
                        </Substyled.GroupBox>

                        <Substyled.ImgBox mt="20px">
                            {loading && (
                                <ImgSkeleton mwd="none" pt="56.312"/>
                            )}
                            
                            <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-license-lobby.webp" 
                            alt={t(`lcItem.lcDepth1.group2.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                            <figcaption className="imgCaption">{t(`lcItem.lcDepth1.group2.caption`)}</figcaption>
                        </Substyled.ImgBox>
                    </Substyled.ImgWrap>

                    <Substyled.ImgWrap>
                        <Substyled.GroupBox type01>
                            <Substyled.SmallTitle>{t(`lcItem.lcDepth1.group3.title`)}</Substyled.SmallTitle>
                            {Object.keys(licenseData.lcItem.lcDepth1.group4).map((item,index) => {
                                return(
                                    <Substyled.SmallDesc key={index}>{parse(t(`lcItem.lcDepth1.group4.item${index+1}`))}</Substyled.SmallDesc>
                                )
                            })}
                        </Substyled.GroupBox>

                        <Substyled.ImgBox mt="20px">
                            {loading && (
                                <ImgSkeleton mwd="none" pt="56.312"/>
                            )}
                            
                            <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-license-mission.webp" 
                            alt={t(`lcItem.lcDepth1.group3.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                            <figcaption className="imgCaption">{t(`lcItem.lcDepth1.group3.caption`)}</figcaption>
                        </Substyled.ImgBox>
                    </Substyled.ImgWrap>

                    <Substyled.ImgWrap>
                        <Substyled.GroupBox type01>
                            <Substyled.SmallTitle>{t(`lcItem.lcDepth1.group5.title`)}</Substyled.SmallTitle>
                            <Substyled.SmallDesc>{parse(t(`lcItem.lcDepth1.group5.description`))}</Substyled.SmallDesc>
                        </Substyled.GroupBox>

                        <Substyled.ImgBox mt="20px">
                            {loading && (
                                <ImgSkeleton mwd="none" pt="56.312"/>
                            )}
                            
                            <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-license-rewards.webp" 
                            alt={t(`lcItem.lcDepth1.group5.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                            <figcaption className="imgCaption">{t(`lcItem.lcDepth1.group5.caption`)}</figcaption>
                        </Substyled.ImgBox>
                    </Substyled.ImgWrap>

                    <BtnClipBoard/>
                    <BtnTop/>
                </Substyled.Inner>
            </Substyled.Wrap>
        </>
    );
}

export default LicenseContents;