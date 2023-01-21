import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainBoxWrap = styled.div`
    padding: 105px 0;
    width: 1300px;
    margin: 0 auto;
`

const MainBoxList = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`

const MainBoxItems = styled.li`
    position: relative;
    z-index: 10;
    width: 49.2%;
    height: 310px;
    border-radius: 12px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    transition: .3s ease-in-out;

    &.mode{background-image: url('../images/bg/bg-box-01.png');}
    &.cartBody{background-image: url('../images/bg/bg-box-02.png');}
    &.character{background-image: url('../images/bg/bg-box-03.png');}
    &.track{background-image: url('../images/bg/bg-box-04.png');}
    &::after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        border-radius: 12px;
        background-color: rgba(0, 0, 0, 0.3);
    }

    >a{
        display: flex; 
        flex-direction: column;
        height: 100%;
    }

    &:hover{
        transform: translateY(-5px);
    }
`

const MainBoxInner = styled.div`
    padding: 40px;
    height: inherit;
`

const TxtBox = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    height: 100%;
    flex-direction: column;
`

const Title = styled.h3`
    font-size: 30px;
    font-family: 'Noto Sans M';
    color: #fff;
    margin-bottom: 10px;
`

const Desc = styled.p`
    font-size: 16px;
    font-family: 'Noto Sans';
    color: #fff;
`

const box = [
    {
        title: "모드",
        desc: "카트라이더 모드들에 대해 설명하고, 각 모드에서 쓰이는 용어들을 알려드려요.",
        className: "mode",
        link: "/mode"
    },
    {
        title: "카트바디",
        desc: "카트라이더 카트바디들에 대해 설명하고, 각 카트바디의 장단점들을 알려드려요.",
        className: "cartBody",
        link: "/cart"
    },
    {
        title: "캐릭터",
        desc: "카트라이더 캐릭터들에 대해 알려드려요.",
        className: "character",
        link: "/character"
    },
    {
        title: "트랙",
        desc: "카트라이더 트랙들에 대해 설명하고, 사용되는 빌드나 드리프트 기술 등등 전반적인 난이도에 대해 알려드려요.",
        className: "track",
        link: "/track"
    }
];

const MainBox = () => {
    return (  
        <>
            <MainBoxWrap>
                <MainBoxList>
                    {box.map((item, index) => {
                        return (
                            <MainBoxItems className={item.className} key={index}>
                                <Link to={item.link}>
                                    <MainBoxInner>
                                        <TxtBox>
                                            <Title>{item.title}</Title>
                                            <Desc>{item.desc}</Desc>
                                        </TxtBox> 
                                    </MainBoxInner>
                                </Link>
                            </MainBoxItems>
                        )
                    })}
                </MainBoxList>
            </MainBoxWrap>    
        </>
    );
}

export default MainBox;