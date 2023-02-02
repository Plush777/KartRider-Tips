import * as Substyled from '../../../style/Sub.style';
import parse from 'html-react-parser';
import BtnTop from '../../../article/BtnTop';
import React from 'react';
import { useParams,NavLink } from 'react-router-dom';

const SubCommonContents = (props) => {

    let {id} = useParams();

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
                </Substyled.SubContentsInner>
            </Substyled.SubContentsWrap>
            <BtnTop/>
        </>
     );
}

export default SubCommonContents;