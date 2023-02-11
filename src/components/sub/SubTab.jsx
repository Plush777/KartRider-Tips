import tabData from '../../data/tab/tab.json';
import { useLayoutEffect, useState , useEffect } from "react";
import { useLocation , NavLink , useParams } from "react-router-dom";
import * as SubTabstyled from '../style/common/Tab.style';

const SubTab = (props) => {

    const {pathname} = useLocation();
    let [isActive,setIsActive] = useState(0);
    let [categoryName,setCategoryName] = useState(
        {
            imgNum: '',
            tabInfoTxt: '',
            tabDataState: []
        }
    );
    let {id} = useParams();
    id = parseInt(id);
    let kartId = props.commonContents.kartDescDepth.find(x => x.id === id);

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
        }
    },[pathname])

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
                                {
                                    pathname.startsWith('/kartbody') ?
                                    <NavLink to={item.route + kartId.id} className={({isActive}) => isActive ? 'active' : item.className}>{item.name}</NavLink>
                                    :
                                    <NavLink to={item.route} className={({isActive}) => isActive ? 'active' : item.className}>{item.name}</NavLink>
                                }
                            </SubTabstyled.TabItem>
                        )})
                    }
                </SubTabstyled.TabList>
            </SubTabstyled.TabWrapInner>
        </SubTabstyled.TabWrap>
    );
}

export default SubTab;