import * as Substyled from '../../../style/Sub.style';
import parse from 'html-react-parser';
import BtnTop from '../../../article/BtnTop';
import React, { useState , useEffect } from 'react';
import { useParams,NavLink } from 'react-router-dom';
import Star from './Star';
import skeletonLogo from '../../../../components/svg/ico-kart-logo-grayscale.svg';

const SubCommonContents = (props) => {

    let {id} = useParams();
    id = parseInt(id);
    let kartId = props.commonContents.kartDesc.find(x => x.id === id);
    let kartId2 = props.commonContents.kartDescDepth.find(x => x.id === id);
    let [preview,setPreview] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPreview(false);
            return() => {clearTimeout()}
        },1200)
    },[preview])

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
                                        <Substyled.SmallTitle fz1 bullet>{kartId.title}</Substyled.SmallTitle>
                                        <Substyled.SmallDesc>{parse(kartId.desc)}</Substyled.SmallDesc>
                                    </Substyled.Top>
                                    <Substyled.Bottom>
                                        <Substyled.Row>
                                            {props.commonContents.staticDesc.map((items,index) => {
                                                return(
                                                    <React.Fragment key={index}>
                                                        <Substyled.RowDesc mwd mt={items.mt}>{items.name}</Substyled.RowDesc>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </Substyled.Row>

                                        <Substyled.Row>
                                            <Substyled.RowDesc>{kartId2.desc}</Substyled.RowDesc>
                                            <Star commonContents={props.commonContents} starParam={id}/>
                                            <Substyled.RowDesc mt="15px">{parse(kartId2.desc2)}</Substyled.RowDesc>
                                            <Substyled.RowDesc mt="15px">{parse(kartId2.desc3)}</Substyled.RowDesc>
                                        </Substyled.Row>
                                    </Substyled.Bottom>
                                </Substyled.TabContent>

                                <Substyled.TabContent>
                                    {preview ?
                                    
                                    <Substyled.PreviewArea loading="true">
                                        <img src={skeletonLogo} alt="로딩 중" width="185" height="73"/>
                                    </Substyled.PreviewArea> :
                                    <Substyled.PreviewArea>
                                        <Substyled.PreviewImg src={kartId2.img} alt={kartId2.alt} />
                                    </Substyled.PreviewArea>
                                    }
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