import tabData from '../../data/tab/tab.json';
import { useLayoutEffect } from "react";
import { useLocation , NavLink } from "react-router-dom";
import * as SubTabstyled from 'components/style/common/Tab.style';
import { useDispatch , useSelector } from "react-redux";
import { setCategoryName } from 'redux/store/store';
import { ReactComponent as SCmode } from 'static/svg/ico-tab01.svg';
import { ReactComponent as SCkartbody } from 'static/svg/ico-tab02.svg';
import { ReactComponent as SCcharacter } from 'static/svg/ico-tab03.svg';
import { ReactComponent as SCtrack } from 'static/svg/ico-tab04.svg';
import { ReactComponent as SCbgArrowRight } from 'static/svg/ico-arrow-right.svg';

const SubTab = () => {
    let dispatch = useDispatch();
    let category = useSelector(state => state.categoryName);
    const {pathname} = useLocation();

    useLayoutEffect(() => {
        if(pathname.startsWith('/mode')){
            dispatch(setCategoryName(
                {
                    imgNum: '1',
                    tabInfoTxt: '모드',
                    tabDataState: tabData.mode,
                    tabClass: 'default'
                }
            ))
        } else if(pathname.startsWith('/kartbody')){
            dispatch(setCategoryName(
                {
                    imgNum: '2',
                    tabInfoTxt: '카트바디',
                    tabDataState: tabData.kartbody
                }
            ))
        } else if(pathname.startsWith('/character')){
            dispatch(setCategoryName(
                {
                    imgNum: '3',
                    tabInfoTxt: '캐릭터',
                    tabDataState: tabData.character
                }
            ))
        }
    },[pathname,dispatch])

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
                    {category.imgNum === '1' ? <SCmode fill="#818181"/>
                    : category.imgNum === '2' ? <SCkartbody fill="#818181"/>
                    : category.imgNum === '3' ? <SCcharacter fill="#818181"/>
                    : category.imgNum === '4' ? <SCtrack fill="#818181"/>
                    : null 
                    }
                    <SubTabstyled.TabInfoTxt>{category.tabInfoTxt}</SubTabstyled.TabInfoTxt>
                    <SCbgArrowRight width="22px" height="22px"/>
                </SubTabstyled.TabInfo>
                <SubTabstyled.TabList>
                    {category.tabDataState.map((item, index) => {
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