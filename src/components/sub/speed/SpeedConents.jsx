import parse from 'html-react-parser';
import * as Substyled from 'components/style/common/Area.style';
import * as Tipstyled from 'components/style/components/sub/Tip.style';
import BtnTop from 'components/article/BtnTop';
import SpeedVideo from 'components/video/SpeedVideo';
import { useState , useEffect } from 'react';
import React from 'react';
import useBodyScrollLock from 'hooks/useBodyScrollLock';
import { ReactComponent as SCvideo } from 'static/svg/ico-video.svg';
import { M768 } from 'components/style/mobile/MediaQuery';
import BottomNavigation from "components/mobile/BottomNavigation";

const pointData = ["순위","1st","2nd","3rd","4th","5th","6th","7th","8th","Retire"];
const pointData2 = ["포인트","10","8","6","5","4","3","2","1","0"];
const bgStyles = ["#8F161B","#FFD700","#C0C0C0","#CC9966","#fff","#fff",
"#fff","#fff","#fff","#FF9999"];
const colorStyles = ["#fff","#000","#000","#000","#000","#000","#000","#000","#000","#000"];
const bbcStyles = ["#fff","#000","#000","#000","#ddd","#ddd","#ddd","#ddd","#ddd","#000"];

const SubContents = (props) => {

    let [isExShow,setIsExShow] = useState(false);
    const { lockScroll , openScroll } = useBodyScrollLock();

    const exShow = () => {
        setIsExShow(true);
        lockScroll();
    }

    return ( 
        <>
            <Substyled.Wrap>
                <Substyled.Inner>
                    {props.speedContents.speed.map((item, index) => {
                        return (
                            <div className="container" key={index}>
                                <div className="titleArea">
                                    <Substyled.Title>{item.group.title}</Substyled.Title>
                                    <Substyled.Desc>{item.group.description}</Substyled.Desc>
                                    <Substyled.Desc>{item.group.description2}</Substyled.Desc>
                                </div>
                                <Substyled.ImgWrap>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{item.group2.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(item.group2.description)}</Substyled.SmallDesc>
                                    </Substyled.GroupBox>

                                    <Substyled.ImgBox mt="20px" ml="-7px">
                                        <Substyled.CommonImg wd01 src={item.group2.img} alt={item.group2.alt}/>
                                        <figcaption className="imgCaption">{item.group2.caption}</figcaption>
                                    </Substyled.ImgBox>
                                    
                                </Substyled.ImgWrap>
                                <Substyled.ImgWrap>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{item.group3.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(item.group3.description)}</Substyled.SmallDesc>
                                    </Substyled.GroupBox>
                                    <Substyled.ImgGroup>
                                        <Substyled.ImgBox ml="-7px">
                                            <Substyled.CommonImg src={item.group3.img} alt={item.group3.alt} />
                                            <figcaption className="imgCaption">{item.group3.caption}</figcaption>
                                        </Substyled.ImgBox>
                                        <Substyled.ImgBox ml="-7px">
                                            <Substyled.CommonImg src={item.group3.img2} alt={item.group3.alt2} />
                                            <figcaption className="imgCaption">{item.group3.caption2}</figcaption>
                                        </Substyled.ImgBox>
                                    </Substyled.ImgGroup>

                                    <Tipstyled.TipGroup mt="35px">
                                        <Tipstyled.TipWrap>
                                            <Tipstyled.TipBox>
                                                <Tipstyled.TextInner>
                                                    <Tipstyled.TipTxt bullet red>{item.tip1.txt}</Tipstyled.TipTxt>
                                                </Tipstyled.TextInner>
                                               
                                                <Tipstyled.ExArea mt="10px">
                                                    <Tipstyled.ExTxt onClick={exShow}>
                                                        <SCvideo/>
                                                        {item.tip1.ex}
                                                    </Tipstyled.ExTxt>
                                                </Tipstyled.ExArea>
                                            </Tipstyled.TipBox>
                                        </Tipstyled.TipWrap>

                                        <Tipstyled.TipWrap>
                                            <Tipstyled.TipBox>
                                                <Tipstyled.TipTxt bullet red>{item.tip2.txt}</Tipstyled.TipTxt>
                                            </Tipstyled.TipBox>
                                        </Tipstyled.TipWrap>
                                    </Tipstyled.TipGroup>
                                </Substyled.ImgWrap>
                                
                                <Substyled.ImgWrap>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{item.group4.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(item.group4.description)}</Substyled.SmallDesc>
                                    </Substyled.GroupBox>
                                    <Substyled.GroupBox>
                                        <Substyled.TableArea>
                                            <table className="style01">
                                                <caption>{item.tableGroup.caption}</caption>
                                                <tbody>
                                                    <tr>
                                                        {pointData.map((item, index) => {
                                                            return (
                                                                <Substyled.Td bg={bgStyles[index]} color={colorStyles[index]} bbc={bbcStyles[index]}
                                                                key={index}>{item}</Substyled.Td>
                                                            )})
                                                        }
                                                    </tr>
                                                    <tr>
                                                        {pointData2.map((item, index) => {
                                                            return (
                                                                <Substyled.Td bg={bgStyles[index]} color={colorStyles[index]}
                                                                key={index}>{item}</Substyled.Td>
                                                            )})
                                                        }
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Substyled.TableArea>
                                    </Substyled.GroupBox>
                                </Substyled.ImgWrap>
                            </div>
                        )})
                    }
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

export default SubContents;