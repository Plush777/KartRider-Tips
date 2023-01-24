import React from 'react';
import { Link } from 'react-router-dom';
import * as MainBoxstyled from '../style/MainBox.style';

const box = [
    {
        title: "모드",
        desc: "카트라이더 모드들에 대해 설명하고, 각 모드에서 쓰이는 용어들을 알려드려요.",
        className: "mode",
        link: "/mode/speed"
    },
    {
        title: "카트바디",
        desc: "카트라이더 카트바디들에 대해 설명하고, 각 카트바디의 장단점들을 알려드려요.",
        className: "cartBody",
        link: "/cartBody"
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
        <MainBoxstyled.ContentWrap>
            <MainBoxstyled.MainBoxWrap>
                <MainBoxstyled.MainBoxList>
                    {box.map((item, index) => {
                        return (
                            <MainBoxstyled.MainBoxItems className={item.className} key={index}>
                                <Link to={item.link}>
                                    <MainBoxstyled.MainBoxInner>
                                        <MainBoxstyled.TxtBox>
                                            <MainBoxstyled.Title>{item.title}</MainBoxstyled.Title>
                                            <MainBoxstyled.Desc>{item.desc}</MainBoxstyled.Desc>
                                        </MainBoxstyled.TxtBox> 
                                    </MainBoxstyled.MainBoxInner>
                                </Link>
                            </MainBoxstyled.MainBoxItems>
                        )
                    })}
                </MainBoxstyled.MainBoxList>
            </MainBoxstyled.MainBoxWrap>    
        </MainBoxstyled.ContentWrap>
    );
}

export default MainBox;