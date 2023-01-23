import styled from "styled-components";
import contentsData from '../../data/mode/sppedMode/contents.json';
import { useState } from "react";

const SubContentsWrap = styled.div`
    width: 100%;
    background-color: #f2f2f2;
`

const SubContentsInner = styled.div`
    width: 1300px;
    margin: 0 auto;
    padding: 80px 0;
`

const TitleArea = styled.div`

`

const SubTitle = styled.h3`
    font-size: 42px;
    font-family: 'nexonLv1Gothic';
    color: #000;
`

const SubDesc = styled.p`
    margin-top: 20px;
    font-family: 'nexonLv1Gothic';
    font-size: 16px;
    color: #333;
`

const SubContents = () => {

    let [contents] = useState(contentsData);

    return ( 
        <>
            <SubContentsWrap>
                <SubContentsInner>
                    {contents.speed.map((item, index) => {
                        return (
                            <TitleArea key={index}>
                                <SubTitle>{item.title}</SubTitle>
                                <SubDesc>{item.description}</SubDesc>
                            </TitleArea>
                        )})
                    }
                </SubContentsInner>
            </SubContentsWrap> 
        </>
     );
}

export default SubContents;