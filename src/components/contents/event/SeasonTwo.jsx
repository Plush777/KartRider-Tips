'use client';

import * as Substyled from 'components/style/common/Area.style';
import { useTranslation } from 'react-i18next';
import useImageLoading from 'hooks/useImageLoading';
import ImgSkeleton from 'components/article/ImgSkeleton';
import React from 'react';
import parse from 'html-react-parser';

const SeasonTwo = ({ eventData }) => {

    const { t } = useTranslation();
    const [loading, handleLoad] = useImageLoading();
    const depth2 = eventData.evItem.evDepth2;

    return(
        <Substyled.AccordionContent type01>
            <Substyled.ImgWrap>
                <Substyled.GroupBox>
                    <Substyled.Desc>{t(`evItem.evDepth2.group1.description`)}</Substyled.Desc>
                    <Substyled.Desc>{t(`evItem.evDepth2.group1.description2`)}</Substyled.Desc>
                </Substyled.GroupBox>

                <Substyled.ImgBox mt="20px">
                    {loading && (
                        <ImgSkeleton mwd="none" pt="56.312"/>
                    )}
                    <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-kart-boost.webp" 
                    alt={t(`evItem.evDepth2.group1.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                    <figcaption className="imgCaption">{t(`evItem.evDepth2.group1.caption`)}</figcaption>
                </Substyled.ImgBox>
            </Substyled.ImgWrap>

            <Substyled.ImgWrap>
                <Substyled.GroupBox>
                    <Substyled.SmallTitle>{t(`evItem.evDepth2.group2.title`)}</Substyled.SmallTitle>
                    <Substyled.SmallDesc>{t(`evItem.evDepth2.group2.description`)}</Substyled.SmallDesc>
                </Substyled.GroupBox>
                
                <Substyled.ImgBox mt="20px">
                    {loading && (
                        <ImgSkeleton mwd="none" pt="56.312"/>
                    )}
                    <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-infinite-boost-mode.webp" 
                    alt={t(`evItem.evDepth2.group2.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                    <figcaption className="imgCaption">{t(`evItem.evDepth2.group2.caption`)}</figcaption>
                </Substyled.ImgBox>
            </Substyled.ImgWrap>

            <Substyled.ImgWrap>
                <Substyled.GroupBox>
                    <Substyled.MediumTitle regular>{t(`evItem.evDepth2.group2.subTitle`)}</Substyled.MediumTitle>
                </Substyled.GroupBox>

                <ul className="groupList">
                    {Object.keys(depth2.group3).map((item,index) => {
                        return(
                            <Substyled.GroupItem key={index} bullet="''" mt="20px">
                                <Substyled.SmallDesc>{t(`evItem.evDepth2.group3.item${index+1}`)}</Substyled.SmallDesc>
                            </Substyled.GroupItem>
                        )
                    })}
                </ul>
            </Substyled.ImgWrap>

            <Substyled.ImgWrap>
                <Substyled.GroupBox>
                    <Substyled.MediumTitle regular>{t(`evItem.evDepth2.group2.subTitle2`)}</Substyled.MediumTitle>
                </Substyled.GroupBox>

                <ul className="groupList">
                    {Object.keys(depth2.group4).map((item,index) => {
                        return(
                            <Substyled.GroupItem key={index} bullet="''" mt="20px">
                                <Substyled.SmallDesc>{t(`evItem.evDepth2.group4.item${index+1}`)}</Substyled.SmallDesc>
                            </Substyled.GroupItem>
                        )
                    })}
                </ul>
            </Substyled.ImgWrap>

            <Substyled.ImgWrap>
                <Substyled.GroupBox>
                    <Substyled.SmallTitle>{t(`evItem.evDepth2.group2.subTitle3`)}</Substyled.SmallTitle>
                    <Substyled.SmallDesc>{t(`evItem.evDepth2.group2.description2`)}</Substyled.SmallDesc>
                </Substyled.GroupBox>

                <ul className="groupList">
                    {Object.keys(depth2.group5).map((item,index) => {
                        return(
                            <Substyled.GroupItem key={index} bullet="''" mt="20px">
                                <Substyled.SmallDesc>{parse(t(`evItem.evDepth2.group5.item${index+1}`))}</Substyled.SmallDesc>
                            </Substyled.GroupItem>
                        )
                    })}
                </ul>
            </Substyled.ImgWrap>
        </Substyled.AccordionContent>
    )
}

export default SeasonTwo;