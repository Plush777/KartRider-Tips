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

const SpinTurnContents = ({ spinturnData }) => {

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
                            <Substyled.Title>{t(`spinturn.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{parse(t(`spinturn.group1.desc`))}</Substyled.Desc>
                        </div>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`spinturn.group2.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`spinturn.group2.desc`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.MediumTitle>{parse(t(`spinturn.group3.subTitle`))}</Substyled.MediumTitle>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox type01 counter>
                                {Object.keys(spinturnData.spinturn.group4).map((item,index) => {
                                    return(
                                        <Substyled.SmallDesc key={index}>{parse(t(`spinturn.group4.item${index+1}`))}</Substyled.SmallDesc>
                                    )
                                })}
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.SmallTitle type02 bullet>{parse(t(`spinturn.group5.subTitle`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key4.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.SmallTitle type02 bullet>{parse(t(`spinturn.group5.subTitle2`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key6.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.SmallTitle type02 bullet>{parse(t(`spinturn.group5.subTitle3`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key7.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.SmallTitle type02 bullet>{parse(t(`spinturn.group5.subTitle4`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key2.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>


                            <Substyled.ImgBox mt="20px" iframeRes>
                                {loading && <ImgSkeleton mwd="none" pt="56.312"/>}
                                <Substyled.VideoFrame src="https://www.veed.io/embed/88695ea8-d1b5-4857-93c7-4f89cd485d1a" allowFullScreen
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

export default SpinTurnContents;