import tabData from '../../data/tab/tab.json';
import { useLayoutEffect, useState } from "react";
import { useLocation , NavLink } from "react-router-dom";
import * as SubTabstyled from 'components/style/common/Tab.style';

const SubTab = () => {

    const {pathname} = useLocation();
    let [isActive,setIsActive] = useState(0);
    let [categoryName,setCategoryName] = useState(
        {
            imgNum: '',
            tabInfoTxt: '',
            tabDataState: []
        }
    );

    useLayoutEffect(() => {
        if(pathname.startsWith('/mode')){
            setCategoryName(
                {
                    imgNum: '1',
                    tabInfoTxt: '모드',
                    tabDataState: tabData.mode
                }
            );
        } else if(pathname.startsWith('/kartbody')){
            setCategoryName({
                imgNum: '2',
                tabInfoTxt: '카트바디',
                tabDataState: tabData.kartbody
            });
        } else if(pathname.startsWith('/character')){
            setCategoryName({
                imgNum: '3',
                tabInfoTxt: '캐릭터',
                tabDataState: tabData.character
            });
        }
    },[pathname])

    const getDataName = (dataName) => {
        if(pathname.startsWith('/kartbody/common') && dataName === 'common'){
            dataName = 'commonActive'
        } else if(pathname.startsWith('/kartbody/advanced') && dataName === 'advanced'){
            dataName = 'advancedActive'
        } else if(pathname.startsWith('/kartbody/rare') && dataName === 'rare'){
            dataName = 'rareActive'
        } else if(pathname.startsWith('/kartbody/epic') && dataName === 'epic'){
            dataName = 'epicActive'
        } else if(pathname.startsWith('/kartbody/legend') && dataName === 'legend'){
            dataName = 'legendActive'
        }

        return dataName;
    }

    return ( 
        <SubTabstyled.TabWrap>
            <SubTabstyled.TabWrapInner>
                <SubTabstyled.TabInfo>
                    <SubTabstyled.TabInfoTxt num={categoryName.imgNum}>{categoryName.tabInfoTxt}</SubTabstyled.TabInfoTxt>
                </SubTabstyled.TabInfo>
                <SubTabstyled.TabList>
                    {categoryName.tabDataState.map((item, index) => {
                        return (
                            <SubTabstyled.TabItem key={index}>
                                <NavLink to={item.route} className={getDataName(item.dataName)}
                                data-name={item.dataName}>{item.name}</NavLink>
                            </SubTabstyled.TabItem>
                        )})
                    }
                </SubTabstyled.TabList>
            </SubTabstyled.TabWrapInner>
        </SubTabstyled.TabWrap>
    );
}

export default SubTab;