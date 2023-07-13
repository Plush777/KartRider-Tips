'use client';

import parse from 'html-react-parser';
import * as Skeletonstyled from 'components/style/common/Skeleton.style';
import * as Substyled from 'components/style/common/Area.style';
import * as Tipstyled from 'components/style/components/sub/Tip.style';
import BtnTop from 'components/article/BtnTop';
import SpeedVideo from 'components/video/SpeedVideo';
import { useState } from 'react';
import React from 'react'; 
import useBodyScrollLock from 'hooks/useBodyScrollLock'; 
import SCvideo from 'svg/ico-video.svg';
import ImgSkeleton from 'components/article/ImgSkeleton';
import useImageLoading from 'hooks/useImageLoading';
import BtnClipBoard from 'components/article/BtnClipBoard';
import ClipBoardAlert from 'components/article/ClipBoardAlert';
import { useSelector } from 'react-redux';
import { Min768 } from 'components/style/mobile/MediaQuery';
import { useTranslation } from 'react-i18next';
import rankData from 'locales/ko/etc/rank';

const SpeedContents = () => {

    let [isExShow,setIsExShow] = useState(false);
    const { lockScroll , openScroll } = useBodyScrollLock();
    const [loading, handleLoad] = useImageLoading();
    let clipBoardDisplay = useSelector(state => state.toggle.clipBoard);
    const { t } = useTranslation();

    const exShow = () => {
        setIsExShow(true);
        lockScroll();
    }

    return ( 
        <>
            <Min768>
                <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            </Min768>
            
            
            <Substyled.Wrap>
                <Substyled.Inner>
                    <div className="container">
                        <div className="titleArea">
                            <Substyled.Title>{t(`speed.depth1.group.title`)}</Substyled.Title>
                            <Substyled.Desc>{t(`speed.depth1.group.description`)}</Substyled.Desc>
                            <Substyled.Desc>{t(`speed.depth1.group.description2`)}</Substyled.Desc>
                        </div>
                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`speed.depth1.group2.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`speed.depth1.group2.description`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.ImgBox mt="20px">
                            {loading && (
                                <ImgSkeleton mwd="none" pt="56.312"/>
                            )}
                                <Substyled.CommonImg ratio="1275/718" src={t(`speed.depth1.group2.img`)} 
                                alt={t(`speed.depth1.group2.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                <figcaption className="imgCaption">{t(`speed.depth1.group2.caption`)}</figcaption>
                            </Substyled.ImgBox>
                        </Substyled.ImgWrap>
                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`speed.depth1.group3.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`speed.depth1.group3.description`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>
                            {loading && (
                                <Skeletonstyled.FlexRowWrap cg="30px">
                                    <ImgSkeleton mwd="none" pt="27.501"/>
                                    <ImgSkeleton  mwd="none" pt="27.501"/>
                                </Skeletonstyled.FlexRowWrap>
                            )}
                                
                            <Substyled.ImgGroup>
                                <Substyled.ImgBox>
                                    <Substyled.CommonImg ratio="300/169" src={t(`speed.depth1.group3.img`)} 
                                    alt={t(`speed.depth1.group3.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                                    <figcaption className="imgCaption">{t(`speed.depth1.group3.caption`)}</figcaption>
                                </Substyled.ImgBox>
                                <Substyled.ImgBox>
                                    <Substyled.CommonImg ratio="300/169" src={t(`speed.depth1.group3.img2`)} 
                                    alt={t(`speed.depth1.group3.alt2`)} onLoad={handleLoad} 
                                    activeDisplay={loading ? 'none' : 'block'}/>
                                    <figcaption className="imgCaption">{t(`speed.depth1.group3.caption2`)}</figcaption>
                                </Substyled.ImgBox>
                            </Substyled.ImgGroup>

                            <Tipstyled.TipGroup mt="35px">
                                <Tipstyled.TipWrap>
                                    <Tipstyled.TipBox>
                                        <Tipstyled.TextInner>
                                            <Tipstyled.TipTxt bullet red>{t(`speed.depth1.tip1.txt`)}</Tipstyled.TipTxt>
                                        </Tipstyled.TextInner>
                                        
                                        <Tipstyled.ExArea mt="10px">
                                            <Tipstyled.ExTxt onClick={exShow}>
                                                <SCvideo/>
                                                {t(`speed.depth1.tip1.ex`)}
                                            </Tipstyled.ExTxt>
                                        </Tipstyled.ExArea>
                                    </Tipstyled.TipBox>
                                </Tipstyled.TipWrap>

                                <Tipstyled.TipWrap>
                                    <Tipstyled.TipBox>
                                        <Tipstyled.TipTxt bullet red>{t(`speed.depth1.tip2.txt`)}</Tipstyled.TipTxt>
                                    </Tipstyled.TipBox>
                                </Tipstyled.TipWrap>
                            </Tipstyled.TipGroup>
                        </Substyled.ImgWrap>
                        
                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`speed.depth1.group4.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`speed.depth1.group4.description`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>
                            <Substyled.GroupBox>
                                <Substyled.TableArea>
                                    <table className="style01">
                                        <caption>{t(`speed.depth1.tableGroup.caption`)}</caption>
                                        <tbody>
                                            <tr>
                                                {Object.keys(rankData.rank).map((item, index) => {
                                                    return (
                                                        <Substyled.Td key={index}>{t(`rank.group${index+1}.item`)}</Substyled.Td>
                                                    )})
                                                }
                                            </tr>
                                            <tr>
                                                {Object.keys(rankData.point).map((item, index) => {
                                                    return (
                                                        <Substyled.Td key={index}>{t(`point.group${index+1}.item`)}</Substyled.Td>
                                                    )})
                                                }
                                            </tr>
                                        </tbody>
                                    </table>
                                </Substyled.TableArea>
                            </Substyled.GroupBox>
                        </Substyled.ImgWrap>
                    </div>
                    <BtnClipBoard/>
                    <BtnTop/>
                </Substyled.Inner>
                
            </Substyled.Wrap>
             
            {
                isExShow &&
                <SpeedVideo setIsExShow={setIsExShow} openScroll={openScroll}/>
            }
        </>
     );
}

export default SpeedContents;