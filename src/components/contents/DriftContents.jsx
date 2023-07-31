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

const DriftContents = ({ driftData }) => {

    const [loading, handleLoad] = useImageLoading();
    let clipBoardDisplay = useSelector(state => state.toggle.clipBoard);
    const { t } = useTranslation();

    return ( 
        <>
            <Min768>
                <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            </Min768>

            <Substyled.Wrap>
                <Substyled.Inner>
                    <div className="container">
                        <div className="titleArea">
                            <Substyled.Title>{t(`techDrift.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{t(`techDrift.group1.desc`)}</Substyled.Desc>
                        </div>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`techDrift.group2.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{t(`techDrift.group2.desc`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.MediumTitle>{parse(t(`techDrift.group3.subTitle`))}</Substyled.MediumTitle>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox type01 counter>
                                {Object.keys(driftData.techDrift.group4).map((item,index) => {
                                    return(
                                        <Substyled.SmallDesc key={index}>{parse(t(`techDrift.group4.item${index+1}`))}</Substyled.SmallDesc>
                                    )
                                })}
                            </Substyled.GroupBox>

                            <Substyled.GroupBox mt>
                                <Substyled.SmallTitle type02>{parse(t(`techDrift.group5.subTitle`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key1.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox mt>
                                <Substyled.SmallTitle type02>{parse(t(`techDrift.group5.subTitle2`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key2.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>

                            <Substyled.ImgBox mt="20px" iframeRes>
                                {loading && <ImgSkeleton mwd="none" pt="56.312"/>}
                                <Substyled.VideoFrame src="https://www.veed.io/embed/7df3adbc-3d23-4e7d-8c07-f34cbfbed2fb" allowFullscreen
                                activeDisplay={loading ? 'none' : 'block'} onLoad={handleLoad}/>
                            </Substyled.ImgBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`techDrift.group6.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`techDrift.group6.desc`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.ImgBox mt="20px" iframeRes>
                                {loading && <ImgSkeleton mwd="none" pt="56.312"/>}
                                <Substyled.VideoFrame src="https://www.veed.io/embed/b933eeb6-268c-4448-8ba3-0bd48c360df6" allowFullScreen
                                activeDisplay={loading ? 'none' : 'block'} onLoad={handleLoad}/>
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

export default DriftContents;