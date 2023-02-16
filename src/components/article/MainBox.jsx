import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as MainBoxstyled from 'components/style/components/main/MainBox.style';
import box from 'data/main/box';

const MainBox = () => {

    let [boxData] = useState(box);

    return (  
        <MainBoxstyled.ContentWrap>
            <MainBoxstyled.MainBoxWrap>
                <MainBoxstyled.MainBoxList>
                    {boxData.box.map((item, index) => {
                        return (
                            <MainBoxstyled.MainBoxItems className={item.className} key={index} onClick={() => {index === 3 && alert('준비중인 콘텐츠에요.')}}>
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