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

const NewCuttingContents = ({ newcuttingData }) => {

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
                            <Substyled.Title>{t(`newcutting.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{parse(t(`newcutting.group1.desc`))}</Substyled.Desc>
                        </div>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`newcutting.group2.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`newcutting.group2.desc`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.MediumTitle>{parse(t(`newcutting.group3.subTitle`))}</Substyled.MediumTitle>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox type01 counter>
                                {Object.keys(newcuttingData.newcutting.group4).map((item,index) => {
                                    return(
                                        <Substyled.SmallDesc key={index}>{parse(t(`screw.group4.item${index+1}`))}</Substyled.SmallDesc>
                                    )
                                })}
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.SmallTitle type02 bullet>{parse(t(`newcutting.group5.subTitle`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key1.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.SmallTitle type02 bullet>{parse(t(`newcutting.group5.subTitle2`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key4.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>

                            {loading && <ImgSkeleton mwd="none" pt="56.312"/>}
                            <Substyled.ImgBox mt="20px" iframeRes activeDisplay={loading ? 'none' : 'block'} onLoad={handleLoad}>
                                <Substyled.VideoFrame src="https://www.veed.io/embed/9161b040-68e1-4c7d-be22-8ee49aa69378" allowFullScreen/>
                            </Substyled.ImgBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`newcutting.group6.title`)}</Substyled.SmallTitle>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.MediumTitle>{t(`newcutting.group6.title2`)}</Substyled.MediumTitle>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox type01 counter>
                                {Object.keys(newcuttingData.newcutting.group7).map((item,index) => {
                                    return(
                                        <Substyled.SmallDesc key={index}>{parse(t(`newcutting.group7.desc${index+1}`))}</Substyled.SmallDesc>
                                    )
                                })}
                            </Substyled.GroupBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.MediumTitle>{t(`newcutting.group6.title3`)}</Substyled.MediumTitle>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox type01 counter>
                                {Object.keys(newcuttingData.newcutting.group8).map((item,index) => {
                                    return(
                                        <Substyled.SmallDesc key={index}>{parse(t(`newcutting.group8.desc${index+1}`))}</Substyled.SmallDesc>
                                    )
                                })}
                            </Substyled.GroupBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.MediumTitle>{t(`newcutting.group6.title4`)}</Substyled.MediumTitle>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox type01 counter>
                                {Object.keys(newcuttingData.newcutting.group9).map((item,index) => {
                                    return(
                                        <Substyled.SmallDesc key={index}>{parse(t(`newcutting.group9.desc${index+1}`))}</Substyled.SmallDesc>
                                    )
                                })}
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

export default NewCuttingContents;