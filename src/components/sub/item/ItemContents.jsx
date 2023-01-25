import * as Substyled from '../../style/Sub.style';
import parse from 'html-react-parser';
import BtnTop from '../../article/BtnTop';

const ItemContents = (props) => {
    return ( 
        <>
            <Substyled.SubContentsWrap>
                <Substyled.SubContentsInner>
                    {props.itemContents.item.map((items,index) => {
                        return(
                            <Substyled.SubContainer key={index}>

                                <Substyled.TitleArea>
                                    <Substyled.SubTitle>{items.group.title}</Substyled.SubTitle>
                                    <Substyled.SubDesc>{parse(items.group.description)}</Substyled.SubDesc>
                                </Substyled.TitleArea>

                                <Substyled.ImgWrap>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{items.group2.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(items.group2.description)}</Substyled.SmallDesc>
                                    </Substyled.GroupBox>
                                    <Substyled.ImgBox mt="20px" ml="-7px">
                                        <img src={items.group2.img} alt={items.group2.alt} />
                                        <Substyled.ImgCaption>{items.group2.caption}</Substyled.ImgCaption>
                                    </Substyled.ImgBox>
                                </Substyled.ImgWrap>

                                <Substyled.GroupContainer>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{items.group3.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(items.group3.description)}</Substyled.SmallDesc>
                                    </Substyled.GroupBox>

                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{items.group4.title}</Substyled.SmallTitle>
                                    </Substyled.GroupBox>
                                </Substyled.GroupContainer>
                                
                                <Substyled.ListContainer>
                                    <Substyled.ListContainerInner>
                                        <Substyled.ListWrap>
                                            <Substyled.ListBox>
                                                {props.itemContents.itemList.map((items,index) => {
                                                    return(
                                                        <Substyled.ListItem key={index}>
                                                            <Substyled.ItemImgBox>
                                                                <Substyled.ItemImg src={items.img} alt={items.alt}/>
                                                            </Substyled.ItemImgBox>
                                                            <Substyled.ItemBox>
                                                                <Substyled.ItemName>{items.name}</Substyled.ItemName>
                                                                <Substyled.ItemDesc>{parse(items.itemDesc)}</Substyled.ItemDesc>
                                                                <Substyled.ItemTip>{parse(items.tip)}</Substyled.ItemTip>
                                                            </Substyled.ItemBox>
                                                        </Substyled.ListItem>
                                                    )
                                                })}
                                            </Substyled.ListBox>
                                        </Substyled.ListWrap>
                                    </Substyled.ListContainerInner>
                                </Substyled.ListContainer>
                            </Substyled.SubContainer>
                        )
                    })}
                </Substyled.SubContentsInner>
            </Substyled.SubContentsWrap>
            <BtnTop/>
        </>
    )
}

export default ItemContents;