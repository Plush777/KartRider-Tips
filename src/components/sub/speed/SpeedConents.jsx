import parse from 'html-react-parser';
import * as Substyled from '../../style/Sub.style';

const pointData = ["순위","1st","2nd","3rd","4th","5th","6th","7th","8th","Retire"];
const pointData2 = ["포인트","10","8","6","5","4","3","2","1","0"];
const bgStyles = ["#8F161B","#FFD700","#C0C0C0","#CC9966","#fff","#fff",
"#fff","#fff","#fff","#FF9999"];
const colorStyles = ["#fff","#000","#000","#000","#000","#000","#000","#000","#000","#000"];
const bbcStyles = ["#fff","#000","#000","#000","#ddd","#ddd","#ddd","#ddd","#ddd","#000"];

const SubContents = (props) => {
    return ( 
        <>
            <Substyled.SubContentsWrap>
                <Substyled.SubContentsInner>
                    {props.speedContents.speed.map((item, index) => {
                        console.log(item);
                        return (
                            <Substyled.SubContainer key={index}>
                                <Substyled.TitleArea>
                                    <Substyled.SubTitle>{item.group.title}</Substyled.SubTitle>
                                    <Substyled.SubDesc>{parse(item.group.description)}</Substyled.SubDesc>
                                </Substyled.TitleArea>
                                <Substyled.ImgWrap>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{item.group2.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(item.group2.description)}</Substyled.SmallDesc>
                                    </Substyled.GroupBox>
                                    <Substyled.ImgBox mt="20px" ml="-7px">
                                        <img src={item.group2.img} alt={item.group2.alt} />
                                        <Substyled.ImgCaption>{item.group2.caption}</Substyled.ImgCaption>
                                    </Substyled.ImgBox>
                                </Substyled.ImgWrap>
                                <Substyled.ImgWrap>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{item.group3.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(item.group3.description)}</Substyled.SmallDesc>
                                    </Substyled.GroupBox>
                                    <Substyled.ImgGroup>
                                        <Substyled.ImgBox ml="-7px">
                                            <img src={item.group3.img} alt={item.group3.alt} />
                                            <Substyled.ImgCaption>{item.group3.caption}</Substyled.ImgCaption>
                                        </Substyled.ImgBox>
                                        <Substyled.ImgBox ml="-7px">
                                            <img src={item.group3.img2} alt={item.group3.alt2} />
                                            <Substyled.ImgCaption>{item.group3.caption2}</Substyled.ImgCaption>
                                        </Substyled.ImgBox>
                                    </Substyled.ImgGroup>
                                    <Substyled.TipGroup mt="35px">
                                        <Substyled.TipWrap>
                                            <Substyled.TipBox>
                                                <Substyled.TipTxt red>{parse(item.tip1.txt)}</Substyled.TipTxt>
                                                <Substyled.ExArea mt="10px">
                                                    <Substyled.ExTxt video>{item.tip1.ex}</Substyled.ExTxt>
                                                </Substyled.ExArea>
                                            </Substyled.TipBox>
                                        </Substyled.TipWrap>
                                        <Substyled.TipWrap>
                                            <Substyled.TipBox>
                                                <Substyled.TipTxt red>{parse(item.tip2.txt)}</Substyled.TipTxt>
                                            </Substyled.TipBox>
                                        </Substyled.TipWrap>
                                    </Substyled.TipGroup>
                                </Substyled.ImgWrap>
                                <Substyled.ImgWrap>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{item.group4.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(item.group4.description)}</Substyled.SmallDesc>
                                    </Substyled.GroupBox>
                                    <Substyled.GroupBox>
                                        <Substyled.TableArea mt="35px">
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
                            </Substyled.SubContainer>
                        )})
                    }
                </Substyled.SubContentsInner>
            </Substyled.SubContentsWrap> 
        </>
     );
}

export default SubContents;