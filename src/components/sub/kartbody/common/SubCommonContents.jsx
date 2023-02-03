import * as Substyled from '../../../style/Sub.style';
import parse from 'html-react-parser';
import BtnTop from '../../../article/BtnTop';
import React from 'react';
import { useParams,NavLink } from 'react-router-dom';
import Star from './Star';

const SubCommonContents = (props) => {

    let {id} = useParams();
    console.log(id);
   
    return ( 
        <>
            <Substyled.SubContentsWrap>
                <Substyled.SubContentsInner>
                    {props.commonContents.kartbody.map((items,index) => {
                        return(
                            <Substyled.SubContainer key={index}>
                                <Substyled.TitleArea>
                                    <Substyled.SubTitle>{items.title}</Substyled.SubTitle>
                                </Substyled.TitleArea>
                            </Substyled.SubContainer>
                        )
                    })}
                    <Substyled.TabWrap mt="20px">
                        <Substyled.TabInner>
                            <Substyled.TabList>
                                {props.commonContents.tabList.map((items,index) => {
                                    return(
                                        <Substyled.TabItem key={index}>
                                            <NavLink to={`/kartbody/common/${items.id}`} className={ ({isActive}) => isActive ? 'active' : items.className}>{items.name}</NavLink>
                                        </Substyled.TabItem>
                                    )
                                })}
                            </Substyled.TabList>
                        </Substyled.TabInner>
                    </Substyled.TabWrap>

                    <Substyled.TabContentWrap>
                        <Substyled.TabContentInner>
                            <Substyled.TabContnetBox>
                                <Substyled.TabContent>
                                    <Substyled.Top>
                                        <Substyled.SmallTitle fz1 bullet>{props.commonContents.descList[id].title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(props.commonContents.descList[id].desc)}</Substyled.SmallDesc>
                                    </Substyled.Top>
                                    <Substyled.Bottom>
                                        {props.commonContents.staticDesc.map((items,index) => {
                                            return(
                                                <Substyled.Row key={index}>
                                                    <Substyled.RowDesc mwd>{items.name}</Substyled.RowDesc>
                                                    <Substyled.RowDesc as={items.tag}>{
                                                        items.tag === 'span' ? parse(items.name2) : <Star/>
                                                    }</Substyled.RowDesc>
                                                </Substyled.Row>
                                            )
                                        })}
                                    </Substyled.Bottom>
                                </Substyled.TabContent>

                                <Substyled.TabContent>
                                    <Substyled.PreviewArea>
                                        
                                    </Substyled.PreviewArea>
                                </Substyled.TabContent>
                            </Substyled.TabContnetBox>
                        </Substyled.TabContentInner>
                    </Substyled.TabContentWrap>
                </Substyled.SubContentsInner>
            </Substyled.SubContentsWrap>
            <BtnTop/>
        </>
     );
}

export default SubCommonContents;