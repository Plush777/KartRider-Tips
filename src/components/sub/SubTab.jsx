import tabData from '../../data/tab/tab.json';
import { useLayoutEffect, useState } from "react";
import { useLocation , NavLink } from "react-router-dom";
import * as SubTabstyled from '../style/SubTab.style';

const SubTab = () => {

    const {pathname} = useLocation();
    let [isActive,setIsActive] = useState(0);
    let [imgNum,setImgNum] = useState('');

    useLayoutEffect(() => {
        if(pathname.startsWith('/mode')){
            setImgNum('1');
        }
    },[pathname])

    const handleItemClick = idx => {
        setIsActive(idx);
    }

    return ( 
        <SubTabstyled.TabWrap>
            <SubTabstyled.TabWrapInner>
                <SubTabstyled.TabInfo>
                    <SubTabstyled.TabInfoTxt num={imgNum}>모드</SubTabstyled.TabInfoTxt>
                </SubTabstyled.TabInfo>
                <SubTabstyled.TabList>
                    {tabData.mode.map((item, index) => {
                        return (
                            <SubTabstyled.TabItem key={index} onClick={() => handleItemClick(index)}>
                                <NavLink to={item.route} className={ ({isActive}) => isActive ? 'active' : ''}>{item.name}</NavLink>
                            </SubTabstyled.TabItem>
                        )})
                    }
                </SubTabstyled.TabList>
            </SubTabstyled.TabWrapInner>
        </SubTabstyled.TabWrap>
    );
}

export default SubTab;