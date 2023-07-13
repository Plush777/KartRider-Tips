'use client';

import * as Tablestyled from 'components/style/common/Table.style';
import * as Substyled from 'components/style/common/Area.style';
import { useTranslation } from 'react-i18next';
import useImageLoading from 'hooks/useImageLoading';
import ImgSkeleton from 'components/article/ImgSkeleton';
import React from 'react';
import parse from 'html-react-parser';
import SCarrowRight from 'svg/ico-arrow-right-type02.svg';

const SeasonOne = ({ eventData }) => {

    const { t } = useTranslation();
    const [loading, handleLoad] = useImageLoading();
    const depth1 = eventData.evItem.evDepth1;

    return(
        <Substyled.AccordionContent type01>
            <Substyled.ImgWrap>
                <Substyled.GroupBox>
                    <Substyled.Desc>{t(`evItem.evDepth1.group2.description`)}</Substyled.Desc>
                    <Substyled.Desc>{t(`evItem.evDepth1.group2.description2`)}</Substyled.Desc>
                </Substyled.GroupBox>
               
                <Substyled.ImgBox mt="20px">
                    {loading && (
                        <ImgSkeleton mwd="none" pt="56.312"/>
                    )}
                    <Substyled.CommonImg ratio="634/357" src="/images/screenShots/img-factory-run.webp" 
                    alt={t(`evItem.evDepth1.group2.alt`)} onLoad={handleLoad} activeDisplay={loading ? 'none' : 'block'}/>
                    <figcaption className="imgCaption">{t(`evItem.evDepth1.group2.caption`)}</figcaption>
                </Substyled.ImgBox>
            </Substyled.ImgWrap>

            <Substyled.ImgWrap mt>
                <Substyled.GroupBox>
                    <Substyled.SmallTitle>{t(`evItem.evDepth1.group3.title`)}</Substyled.SmallTitle>
                </Substyled.GroupBox>

                <Substyled.GroupBox>
                    <Substyled.MediumTitle regular>{t(`evItem.evDepth1.group3.subTitle`)}</Substyled.MediumTitle>
                    <Substyled.SmallDesc>{t(`evItem.evDepth1.group3.description`)}</Substyled.SmallDesc>
                </Substyled.GroupBox>

                <Tablestyled.Wrap mt>
                    <Tablestyled.Table className="type02 type04 col3">
                        <Tablestyled.Head>
                            <Tablestyled.Row>
                                {Object.keys(depth1.group4).map((item,index) => {
                                    return(
                                        <Tablestyled.CellHeader scope="col" key={index}>{t(`evItem.evDepth1.group4.item${index+1}`)}</Tablestyled.CellHeader>
                                    )
                                })}
                            </Tablestyled.Row>
                        </Tablestyled.Head>

                        <Tablestyled.Body>
                            <Tablestyled.Row>
                                {Object.keys(depth1.group5).map((item,index) => {
                                    return(
                                        <Tablestyled.CellDescription as="td" key={index}>{t(`evItem.evDepth1.group5.item${index+1}`)}</Tablestyled.CellDescription>
                                    )  
                                })}
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                {Object.keys(depth1.group6).map((item,index) => {
                                    return(
                                        <Tablestyled.CellDescription as="td" key={index}>{t(`evItem.evDepth1.group6.item${index+1}`)}</Tablestyled.CellDescription>
                                    )  
                                })}
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                {Object.keys(depth1.group7).map((item,index) => {
                                    return(
                                        <Tablestyled.CellDescription as="td" key={index}>{t(`evItem.evDepth1.group7.item${index+1}`)}</Tablestyled.CellDescription>
                                    )  
                                })}
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                {Object.keys(depth1.group8).map((item,index) => {
                                    return(
                                        <Tablestyled.CellDescription as="td" key={index}>{t(`evItem.evDepth1.group8.item${index+1}`)}</Tablestyled.CellDescription>
                                    )  
                                })}
                            </Tablestyled.Row>
                        </Tablestyled.Body>
                    </Tablestyled.Table>
                </Tablestyled.Wrap>
            </Substyled.ImgWrap>

            <Substyled.ImgWrap>
                <Substyled.GroupBox>
                    <Substyled.MediumTitle regular>{t(`evItem.evDepth1.group9.title`)}</Substyled.MediumTitle>
                    <Substyled.SmallDesc>{t(`evItem.evDepth1.group9.description`)}</Substyled.SmallDesc>
                    
                    <Substyled.GroupInnerBox type="marginTop01" indent="type01">
                        {Object.keys(depth1.group10).map((item,index) => {
                            return(
                                <Substyled.GroupInnerBoxItem type="bullet" key={index}>
                                    <span>{parse(t(`evItem.evDepth1.group10.item${index+1}`))}</span>
                                </Substyled.GroupInnerBoxItem>
                            )
                        })}
                    </Substyled.GroupInnerBox>
                </Substyled.GroupBox>

                <Substyled.GroupBox>
                    <Substyled.MediumTitle regular>{t(`evItem.evDepth1.group11.title`)}</Substyled.MediumTitle>
                </Substyled.GroupBox>

                <Substyled.GroupBox>
                    <Substyled.MediumTitle regular>{t(`evItem.evDepth1.group12.title`)}</Substyled.MediumTitle>
                </Substyled.GroupBox>
            </Substyled.ImgWrap>

            <Substyled.ImgWrap>
                <Substyled.GroupBox type01>
                    <Substyled.SmallTitle>{t(`evItem.evDepth1.group13.title`)}</Substyled.SmallTitle>
                    <Substyled.SmallDesc>{t(`evItem.evDepth1.group13.description`)}</Substyled.SmallDesc>
                    <Substyled.SmallDesc>{t(`evItem.evDepth1.group13.description2`)}</Substyled.SmallDesc>
                </Substyled.GroupBox>

                <Tablestyled.Wrap mt>
                    <Tablestyled.Table type01 lineHeight className="type02 type04 col3">
                        <Tablestyled.Head>
                            <Tablestyled.Row>
                                {Object.keys(depth1.group14).map((item,index) => {
                                    return(
                                        <Tablestyled.CellHeader key={index}>{t(`evItem.evDepth1.group14.item${index+1}`)}</Tablestyled.CellHeader>
                                    )
                                })}
                            </Tablestyled.Row>
                        </Tablestyled.Head>

                        <Tablestyled.Body>
                            <Tablestyled.Row>
                                {Object.keys(depth1.group15).map((item,index) => {
                                    const values = Object.values(depth1.group15);

                                    return(
                                        <Tablestyled.CellDescription padding="10px" as="td" key={index}>
                                            {index === 0 ? <img src={values[0]} width="48" height="48" alt=""/> : <span>{t(`evItem.evDepth1.group15.item${index+1}`)}</span> }
                                        </Tablestyled.CellDescription>
                                    )
                                })}
                            </Tablestyled.Row>
                        </Tablestyled.Body>
                    </Tablestyled.Table>
                </Tablestyled.Wrap>

                <Substyled.ArrowRightDesc to="/mode/item">
                    {t(`evItem.evDepth1.group16.etc`)}
                    <SCarrowRight width="24px" height="24px" fill="#000"/>
                </Substyled.ArrowRightDesc>
            </Substyled.ImgWrap>

            <Substyled.ImgWrap>
                <Substyled.GroupBox mb>
                    <Substyled.SmallTitle>{t(`evItem.evDepth1.group17.title`)}</Substyled.SmallTitle>
                </Substyled.GroupBox>

                <Tablestyled.Wrap>
                    <Tablestyled.Table width="200" lineHeight className="type02 type04 col2">
                        <Tablestyled.Head>
                            <Tablestyled.Row>
                                {Object.keys(depth1.group18).map((item,index) => {
                                    return(
                                        <Tablestyled.CellHeader scope="col" key={index}>{t(`evItem.evDepth1.group18.item${index+1}`)}</Tablestyled.CellHeader>
                                    )
                                })}
                            </Tablestyled.Row>
                        </Tablestyled.Head>

                        <Tablestyled.Body>
                            <Tablestyled.Row>
                                {Object.keys(depth1.group19).map((item,index) => {
                                    return(
                                        <Tablestyled.CellDescription rowSpan={index === 0 ? '5' : null} as="td" key={index}>{t(`evItem.evDepth1.group19.item${index+1}`)}</Tablestyled.CellDescription>
                                    )
                                })}
                            </Tablestyled.Row>
                            
                            {Object.keys(depth1.group20).map((item,index) => {
                                return(
                                    <Tablestyled.Row key={index}>
                                        <Tablestyled.CellDescription as="td">{t(`evItem.evDepth1.group20.item${index+1}`)}</Tablestyled.CellDescription>
                                    </Tablestyled.Row>  
                                )
                            })}

                            <Tablestyled.Row>
                                {Object.keys(depth1.group21).map((item,index) => {
                                    return(
                                        <Tablestyled.CellDescription rowSpan={index === 0 ? '4' : null} as="td" key={index}>{parse(t(`evItem.evDepth1.group21.item${index+1}`))}</Tablestyled.CellDescription>
                                    )
                                })}
                            </Tablestyled.Row>

                            {Object.keys(depth1.group22).map((item,index) => {
                                return(
                                    <Tablestyled.Row key={index}>
                                        <Tablestyled.CellDescription as="td">{t(`evItem.evDepth1.group22.item${index+1}`)}</Tablestyled.CellDescription>
                                    </Tablestyled.Row>  
                                )
                            })}

                            <Tablestyled.Row>
                                {Object.keys(depth1.group23).map((item,index) => {
                                    return(
                                        <Tablestyled.CellDescription rowSpan={index === 0 ? '3' : null} as="td" key={index}>{parse(t(`evItem.evDepth1.group23.item${index+1}`))}</Tablestyled.CellDescription>
                                    )
                                })}
                            </Tablestyled.Row>

                            {Object.keys(depth1.group24).map((item,index) => {
                                return(
                                    <Tablestyled.Row key={index}>
                                        <Tablestyled.CellDescription as="td">{t(`evItem.evDepth1.group24.item${index+1}`)}</Tablestyled.CellDescription>
                                    </Tablestyled.Row>  
                                )
                            })}
                        </Tablestyled.Body>
                    </Tablestyled.Table>
                </Tablestyled.Wrap>
            </Substyled.ImgWrap>

            <Substyled.ImgWrap>
                <Substyled.GroupBox>
                    <Substyled.SmallTitle>{t(`evItem.evDepth1.group25.title`)}</Substyled.SmallTitle>
                </Substyled.GroupBox>
            
                <Substyled.GroupBox>
                    <Substyled.MediumTitle color="black" regular>{t(`evItem.evDepth1.group26.title`)}</Substyled.MediumTitle>
                    <Substyled.SmallDesc>{t(`evItem.evDepth1.group26.description`)}</Substyled.SmallDesc>
                </Substyled.GroupBox>

                <Substyled.GroupBox type01>
                    <Substyled.MediumTitle color="black" regular>{t(`evItem.evDepth1.group27.title`)}</Substyled.MediumTitle>
                
                    {Object.keys(depth1.group28).map((item,index) => {
                        return(
                            <Substyled.SmallDesc>{parse(t(`evItem.evDepth1.group28.item${index+1}`))}</Substyled.SmallDesc>
                        )
                    })}
                </Substyled.GroupBox>
            </Substyled.ImgWrap>
        </Substyled.AccordionContent>
    )
}

export default SeasonOne;