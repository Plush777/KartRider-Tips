import * as Substyled from '../../../components/style/common/Area.style';
import * as Itemstyled from '../../../components/style/components/sub/Item.style'
import parse from 'html-react-parser';
import BtnTop from '../../article/BtnTop'; 
import React from 'react';

const ItemContents = (props) => {
    return ( 
        <>
            <Substyled.Wrap>
                <Substyled.Inner>
                    {props.itemContents.item.map((items,index) => {
                        return(
                            <div className="container" key={index}>

                                <div className="titleArea">
                                    <Substyled.Title>{items.group.title}</Substyled.Title>
                                    <Substyled.Desc>{parse(items.group.description)}</Substyled.Desc>
                                </div>

                                <Substyled.ImgWrap>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{items.group2.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(items.group2.description)}</Substyled.SmallDesc>
                                    </Substyled.GroupBox>
                                    <Substyled.ImgBox mt="20px" ml="-7px">
                                        <img src={items.group2.img} alt={items.group2.alt} />
                                        <figcaption className="imgCaption">{items.group2.caption}</figcaption>
                                    </Substyled.ImgBox>
                                </Substyled.ImgWrap>

                                <Substyled.GroupContainer>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{items.group3.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(items.group3.description)}</Substyled.SmallDesc>
                                    </Substyled.GroupBox>
                                </Substyled.GroupContainer>

                                <Substyled.GroupContainer>
                                    <Substyled.GroupBox>
                                        <Substyled.SmallTitle>{items.group4.title}</Substyled.SmallTitle>
                                    </Substyled.GroupBox>

                                    <Substyled.ListContainer>
                                        <Substyled.ListContainerInner>
                                            <div className="listWrap">
                                                <Substyled.ListBox>
                                                    {props.itemContents.itemList.map((items,index) => {
                                                        return(
                                                            <Substyled.ListItem key={index}>
                                                                <Itemstyled.ItemImgBox>
                                                                    <Itemstyled.ItemImg src={items.img} alt={items.alt}/>
                                                                </Itemstyled.ItemImgBox>
                                                                <Itemstyled.ItemBox>
                                                                    <Itemstyled.ItemName>{items.name}</Itemstyled.ItemName>
                                                                    <Itemstyled.ItemDesc>{parse(items.itemDesc)}</Itemstyled.ItemDesc>
                                                                    <Itemstyled.ItemTip>{parse(items.tip)}</Itemstyled.ItemTip>
                                                                </Itemstyled.ItemBox>
                                                            </Substyled.ListItem>
                                                        )
                                                    })}
                                                </Substyled.ListBox>
                                            </div>
                                        </Substyled.ListContainerInner>
                                    </Substyled.ListContainer>
                                </Substyled.GroupContainer>

                                <Substyled.GroupContainer>
                                    <Substyled.SmallTitle>{items.group5.title}</Substyled.SmallTitle>
                                    <ul className="groupList">
                                        {props.itemContents.itemTips.map((items,index) => {
                                            return(
                                                <Substyled.GroupItem key={index} mt="30px">
                                                    <Substyled.MediumTitle>{items.title}</Substyled.MediumTitle>
                                                    <Substyled.SmallDesc>{parse(items.desc)}</Substyled.SmallDesc>
                                                </Substyled.GroupItem>
                                            )
                                        })}
                                    </ul>
                                </Substyled.GroupContainer>

                                <Substyled.GroupContainer>
                                    <Substyled.SmallTitle>{items.group6.title}</Substyled.SmallTitle>
                                    <ul className="groupList">
                                        {props.itemContents.itemTerm.map((items,index) => {
                                            return(
                                                <Substyled.GroupItem key={index} bullet="''" mt="20px">
                                                    <Substyled.SmallDesc>{parse(items.detail)}</Substyled.SmallDesc>
                                                </Substyled.GroupItem>
                                            )})
                                        }
                                    </ul>
                                </Substyled.GroupContainer>
                            </div>
                        )
                    })}
                </Substyled.Inner>
            </Substyled.Wrap>
            
            <BtnTop/>
        </>
    )
}

export default ItemContents;