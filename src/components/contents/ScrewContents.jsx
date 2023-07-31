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

const ScrewContents = ({ screwData }) => {

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
                            <Substyled.Title>{t(`screw.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{parse(t(`screw.group1.desc`))}</Substyled.Desc>
                        </div>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`screw.group2.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{t(`screw.group2.desc`)}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.MediumTitle>{parse(t(`screw.group3.subTitle`))}</Substyled.MediumTitle>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox type01 counter>
                                {Object.keys(screwData.screw.group4).map((item,index) => {
                                    return(
                                        <Substyled.SmallDesc key={index}>{parse(t(`screw.group4.item${index+1}`))}</Substyled.SmallDesc>
                                    )
                                })}
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.SmallTitle type02 bullet>{parse(t(`screw.group5.subTitle`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key1.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.SmallTitle type02 bullet>{parse(t(`screw.group5.subTitle2`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key4.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>

                            <Substyled.GroupBox>
                                <Substyled.SmallTitle type02 bullet>{parse(t(`screw.group5.subTitle3`))}</Substyled.SmallTitle>
                                <Substyled.CommonImg width="277px" height="115px" src='../../../images/common/img-key1.webp' alt="" className='transparent custom'/>
                            </Substyled.GroupBox>

                            <Substyled.ImgBox mt="20px" iframeRes>
                                {loading && <ImgSkeleton mwd="none" pt="56.312"/>}
                                <Substyled.VideoFrame src="https://www.veed.io/embed/f85c4de4-a922-499e-a712-fb647098a39b" allowFullScreen
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

export default ScrewContents;