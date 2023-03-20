import * as BottomNavigationstyled from 'components/style/mobile/BottomNavigation.style';
import { useSelector , useDispatch } from 'react-redux';
import { setGnbActive } from "redux/store/store";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { ReactComponent as SCmode } from 'static/svg/ico-tab01.svg';
import { ReactComponent as SCkartbody } from 'static/svg/ico-tab02.svg';
import { ReactComponent as SCcharacter } from 'static/svg/ico-tab03.svg';
import { ReactComponent as SCtrack } from 'static/svg/ico-tab04.svg';


const BottomNavigation = () => {

    let gnbData = useSelector(state => state.gnb);
    let gnbActiveState = useSelector(state => state.gnbActive);
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const handleClick = (e,index) => {
        dispatch(setGnbActive(index));
    }

    useLayoutEffect(() => {
        if(pathname.startsWith('/mode')){
            dispatch(setGnbActive(0));
        } else if(pathname.startsWith('/kartbody')){
            dispatch(setGnbActive(1));
        } else if(pathname.startsWith('/character')){
            dispatch(setGnbActive(2));
        } else if (pathname.startsWith('/track')){
            dispatch(setGnbActive(3));
        }
    },[pathname,dispatch]);

    return ( 
        <BottomNavigationstyled.BottomNavWrap id="aside">
           <div className="menuArea">
                <BottomNavigationstyled.MenuList>
                {gnbData.map((item,index) => {
                    return(
                        <BottomNavigationstyled.MenuItem key={index}  className={gnbActiveState === index ? 'active' : item.className}
                        onClick={e => {
                            index === 3 && alert('준비중인 콘텐츠에요.');
                            handleClick(e,index);
                            }}>
                            <BottomNavigationstyled.MenuLink className={item.className} to={item.link} title={item.name}>
                                {index === 0 ? <SCmode fill="#000"/>
                                : index === 1 ? <SCkartbody fill="#000"/>
                                : index === 2 ? <SCcharacter fill="#000"/>
                                : index === 3 ? <SCtrack fill="#818181"/>
                                : null
                                }
                                <span>{item.name}</span>
                            </BottomNavigationstyled.MenuLink>
                        </BottomNavigationstyled.MenuItem>
                    )
                })}
                </BottomNavigationstyled.MenuList>
           </div>
        </BottomNavigationstyled.BottomNavWrap>
    );
}

export default BottomNavigation;