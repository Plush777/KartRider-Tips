'use client';

import parse from 'html-react-parser';
import * as Tablestyled from 'components/style/common/Table.style';
import * as Substyled from 'components/style/common/Area.style';
import BtnTop from 'components/article/BtnTop';
import ImgSkeleton from 'components/article/ImgSkeleton';
import useImageLoading from 'hooks/useImageLoading';
import { Min768 } from 'components/style/mobile/MediaQuery';
import ClipBoardAlert from 'components/article/ClipBoardAlert';
import { useSelector } from 'react-redux';
import BtnClipBoard from 'components/article/BtnClipBoard';
import { useTranslation } from 'react-i18next';
import Difficulty from 'components/article/Difficulty';
import Accordion from 'components/contents/rank/Accordion';
import SeasonOne from 'components/contents/rank/SeasonOne';
import SeasonTwo from 'components/contents/rank/SeasonTwo';

const GrandPrizeContents = ({ grandPrizeData }) => {

    let clipBoardDisplay = useSelector(state => state.toggle.clipBoard);
    let trackData = useSelector(state => state.tracks);
    const [loading, handleLoad] = useImageLoading();
    
    const itemDifficulty = [5.7,5.7,5.7,5.7,4,4,4,4,4,4,4,4,4,4,2.2,2.2,2.2,2.2,2.2];
    const speedDifficulty = [10,10,10,10,10,7.5,7.5,7.5,7.5,7.5,7.5,7.5,5.7,5.7,5.7,5.7,5.7,4,0];
    const itemDifficultySpread = itemDifficulty.map((item,index) => item);
    const speedDifficultySpread = speedDifficulty.map((item,index) => item);
    const grandprixImages= ["/images/screenShots/img-ranks.webp"]
    const { t } = useTranslation();

    const accordions = [
        {
            id: 1,
            title: t(`gpItem.gpDepth1.group18.titleS01`),
            content: <SeasonOne />,
        },
        {
            id: 2,
            title: t(`gpItem.gpDepth1.group18.titleS02`),
            content: <SeasonTwo />,
        },
    ];

    return ( 
        <>
            <Min768>
                <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            </Min768>

            <Substyled.Wrap>
                <Substyled.Inner>
                    <div className="container">
                        <div className="titleArea">
                            <Substyled.Title>{t(`gpItem.gpDepth1.group1.title`)}</Substyled.Title>
                            <Substyled.Desc>{parse(t(`gpItem.gpDepth1.group1.description`))}</Substyled.Desc>
                        </div>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`gpItem.gpDepth1.group2.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`gpItem.gpDepth1.group2.description`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>

                            <Substyled.ImgBox mt="20px" hType01>
                                {loading && (
                                    <ImgSkeleton mwd="648px" ht="203"/>
                                )}
                                
                                <Substyled.CommonImg ratio="648/203" src={grandprixImages[0]} alt="등급 이미지" onLoad={handleLoad} 
                                activeDisplay={loading ? 'none' : 'block'} className="transparent"/>
                                <figcaption className="imgCaption">브론즈부터 그랜드 마스터까지</figcaption>
                            </Substyled.ImgBox>
                        </Substyled.ImgWrap>
                        
                        <Substyled.GroupContainer>
                            <Tablestyled.Wrap gridTemplateColumns="repeat(3, 240px)" display="grid" rg="60px" jc="space-between" type="full">

                                <Tablestyled.Group>
                                    <Substyled.GroupBox>
                                        <Substyled.MediumTitle>{t(`gpItem.gpDepth1.group3.title1`)}</Substyled.MediumTitle>
                                    </Substyled.GroupBox>

                                    <Tablestyled.Table className="type02">
                                        <Tablestyled.Head>
                                            <Tablestyled.Row>
                                                <Tablestyled.CellHeader>{t(`gpItem.gpDepth1.group4.tHeader`)}</Tablestyled.CellHeader>
                                                <Tablestyled.CellHeader>{t(`gpItem.gpDepth1.group4.tHeader2`)}</Tablestyled.CellHeader>
                                            </Tablestyled.Row>
                                        </Tablestyled.Head>

                                        <Tablestyled.Body flex>
                                            <Tablestyled.Row>
                                                {Object.keys(grandPrizeData.gpItem.gpDepth1.group5).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>{t(`gpItem.gpDepth1.group5.bronze${index+1}`)}</Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                            <Tablestyled.Row>
                                                {Object.keys(grandPrizeData.gpItem.gpDepth1.group10).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>
                                                            <Tablestyled.BronzeDiv as="span" className="full">{t(`gpItem.gpDepth1.group10.bronze${index+1}`)}</Tablestyled.BronzeDiv>
                                                        </Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                        </Tablestyled.Body>
                                    </Tablestyled.Table>

                                </Tablestyled.Group>

                                <Tablestyled.Group>
                                    <Substyled.GroupBox>
                                        <Substyled.MediumTitle>{t(`gpItem.gpDepth1.group3.title2`)}</Substyled.MediumTitle>
                                    </Substyled.GroupBox>

                                    <Tablestyled.Table className="type02">
                                        <Tablestyled.Head>
                                            <Tablestyled.Row>
                                                <Tablestyled.CellHeader>{t(`gpItem.gpDepth1.group4.tHeader`)}</Tablestyled.CellHeader>
                                                <Tablestyled.CellHeader>{t(`gpItem.gpDepth1.group4.tHeader2`)}</Tablestyled.CellHeader>
                                            </Tablestyled.Row>
                                        </Tablestyled.Head>

                                        <Tablestyled.Body flex>
                                            <Tablestyled.Row>
                                                {Object.keys(grandPrizeData.gpItem.gpDepth1.group6).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>{t(`gpItem.gpDepth1.group6.silver${index+1}`)}</Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                            <Tablestyled.Row>
                                                {Object.keys(grandPrizeData.gpItem.gpDepth1.group11).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>
                                                            <Tablestyled.SliverDiv as="span" className="full">{t(`gpItem.gpDepth1.group11.silver${index+1}`)}</Tablestyled.SliverDiv>
                                                        </Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                        </Tablestyled.Body>
                                    </Tablestyled.Table>

                                </Tablestyled.Group>

                                <Tablestyled.Group>
                                    <Substyled.GroupBox>
                                        <Substyled.MediumTitle>{t(`gpItem.gpDepth1.group3.title3`)}</Substyled.MediumTitle>
                                    </Substyled.GroupBox>

                                    <Tablestyled.Table className="type02">
                                        <Tablestyled.Head>
                                            <Tablestyled.Row>
                                                <Tablestyled.CellHeader>{t(`gpItem.gpDepth1.group4.tHeader`)}</Tablestyled.CellHeader>
                                                <Tablestyled.CellHeader>{t(`gpItem.gpDepth1.group4.tHeader2`)}</Tablestyled.CellHeader>
                                            </Tablestyled.Row>
                                        </Tablestyled.Head>

                                        <Tablestyled.Body flex>
                                            <Tablestyled.Row>
                                                {Object.keys(grandPrizeData.gpItem.gpDepth1.group7).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>{t(`gpItem.gpDepth1.group7.gold${index+1}`)}</Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                            <Tablestyled.Row>
                                                {Object.keys(grandPrizeData.gpItem.gpDepth1.group12).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>
                                                            <Tablestyled.GoldDiv as="span" className="full">{t(`gpItem.gpDepth1.group12.gold${index+1}`)}</Tablestyled.GoldDiv>
                                                        </Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                        </Tablestyled.Body>
                                    </Tablestyled.Table>

                                </Tablestyled.Group>

                                <Tablestyled.Group>
                                    <Substyled.GroupBox>
                                        <Substyled.MediumTitle>{t(`gpItem.gpDepth1.group3.title4`)}</Substyled.MediumTitle>
                                    </Substyled.GroupBox>

                                    <Tablestyled.Table className="type02">
                                        <Tablestyled.Head>
                                            <Tablestyled.Row>
                                                <Tablestyled.CellHeader>{t(`gpItem.gpDepth1.group4.tHeader`)}</Tablestyled.CellHeader>
                                                <Tablestyled.CellHeader>{t(`gpItem.gpDepth1.group4.tHeader2`)}</Tablestyled.CellHeader>
                                            </Tablestyled.Row>
                                        </Tablestyled.Head>

                                        <Tablestyled.Body flex>
                                            <Tablestyled.Row>
                                                {Object.keys(grandPrizeData.gpItem.gpDepth1.group8).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>{t(`gpItem.gpDepth1.group8.master${index+1}`)}</Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                            <Tablestyled.Row>
                                                {Object.keys(grandPrizeData.gpItem.gpDepth1.group13).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>
                                                            <Tablestyled.MasterDiv as="span" className="full">{t(`gpItem.gpDepth1.group13.master${index+1}`)}</Tablestyled.MasterDiv>
                                                        </Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                        </Tablestyled.Body>
                                    </Tablestyled.Table>

                                </Tablestyled.Group>

                                <Tablestyled.Group>
                                    <Substyled.GroupBox>
                                        <Substyled.MediumTitle>{t(`gpItem.gpDepth1.group3.title5`)}</Substyled.MediumTitle>
                                    </Substyled.GroupBox>

                                    <Tablestyled.Table className="type02">
                                        <Tablestyled.Head>
                                            <Tablestyled.Row>
                                                <Tablestyled.CellHeader>{t(`gpItem.gpDepth1.group4.tHeader`)}</Tablestyled.CellHeader>
                                                <Tablestyled.CellHeader>{t(`gpItem.gpDepth1.group4.tHeader2`)}</Tablestyled.CellHeader>
                                            </Tablestyled.Row>
                                        </Tablestyled.Head>

                                        <Tablestyled.Body flex>
                                            <Tablestyled.Row>
                                                {Object.keys(grandPrizeData.gpItem.gpDepth1.group9).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>{t(`gpItem.gpDepth1.group9.grandmaster${index+1}`)}</Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                            <Tablestyled.Row>
                                                {Object.keys(grandPrizeData.gpItem.gpDepth1.group14).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>
                                                            <Tablestyled.GrandMasterDiv as="span" className="full">{t(`gpItem.gpDepth1.group14.grandmaster${index+1}`)}</Tablestyled.GrandMasterDiv>
                                                        </Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                        </Tablestyled.Body>
                                    </Tablestyled.Table>

                                </Tablestyled.Group>
                            </Tablestyled.Wrap>
                        </Substyled.GroupContainer>
                        
                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`gpItem.gpDepth1.group15.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`gpItem.gpDepth1.group15.description`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>
                        </Substyled.ImgWrap>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`gpItem.gpDepth1.group16.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`gpItem.gpDepth1.group16.description`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>
                        </Substyled.ImgWrap>

                        <Substyled.GroupContainer>
                            <Tablestyled.Wrap>
                                <Tablestyled.Group type="type03">
                                    <Tablestyled.Table className="type02 type03">
                                        <Tablestyled.Head>
                                            <Tablestyled.Row>
                                                <Tablestyled.CellHeader>
                                                    <Tablestyled.OrangeDiv as="span" className="full">{t(`gpItem.gpDepth1.group4.tHeader3`)}</Tablestyled.OrangeDiv>
                                                </Tablestyled.CellHeader>
                                                <Tablestyled.CellHeader>
                                                    <Tablestyled.SkyDiv as="span" className="full">{t(`gpItem.gpDepth1.group4.tHeader4`)}</Tablestyled.SkyDiv>
                                                </Tablestyled.CellHeader>
                                            </Tablestyled.Row>
                                        </Tablestyled.Head>

                                        <Tablestyled.Body>
                                            <Tablestyled.Row>
                                                {Object.keys(trackData.trackList.itemMode).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>
                                                            <Tablestyled.Box>
                                                                <Tablestyled.Left>
                                                                    <span>{t(`trackList.itemMode.item${index+1}`)}</span>
                                                                </Tablestyled.Left>
                                                                <Tablestyled.Right>
                                                                    <Difficulty value={itemDifficultySpread[index]}/>
                                                                </Tablestyled.Right>
                                                            </Tablestyled.Box>
                                                        </Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                            <Tablestyled.Row>
                                                {Object.keys(trackData.trackList.speedMode).map((item,index) => {
                                                    return(
                                                        <Tablestyled.CellDescription as="td" key={index}>
                                                            <Tablestyled.Box>
                                                                <Tablestyled.Left>
                                                                    <span>{t(`trackList.speedMode.item${index+1}`)}</span>
                                                                </Tablestyled.Left>
                                                                <Tablestyled.Right>
                                                                    {
                                                                        speedDifficultySpread[index] !== 0 && <Difficulty value={speedDifficultySpread[index]}/>
                                                                    }
                                                                </Tablestyled.Right>
                                                            </Tablestyled.Box>
                                                        </Tablestyled.CellDescription>
                                                    )
                                                })}
                                            </Tablestyled.Row>
                                        </Tablestyled.Body>
                                    </Tablestyled.Table>
                                </Tablestyled.Group>
                            </Tablestyled.Wrap>                            
                        </Substyled.GroupContainer>

                        <Substyled.ImgWrap>
                            <Substyled.GroupBox>
                                <Substyled.SmallTitle>{t(`gpItem.gpDepth1.group17.title`)}</Substyled.SmallTitle>
                                <Substyled.SmallDesc>{parse(t(`gpItem.gpDepth1.group17.description`))}</Substyled.SmallDesc>
                            </Substyled.GroupBox>
                        </Substyled.ImgWrap>

                        {accordions.map((item,index) => {
                            return(
                                <Accordion
                                    key={index}
                                    title={item.title}
                                    accordionContent={item.content}
                                />
                            )
                        })}
                    </div>
                <BtnClipBoard/>
                <BtnTop/>
                </Substyled.Inner>
            </Substyled.Wrap>
        </>
    );
}

export default GrandPrizeContents;