import * as BottomNavigationstyled from 'components/style/mobile/BottomNavigation.style';
import { useSelector } from 'react-redux';

const BottomNavigation = () => {

    let gnbData = useSelector(state => state.gnb);

    return ( 
        <BottomNavigationstyled.BottomNavWrap>
           <div className="menuArea">
                <BottomNavigationstyled.MenuList>
                {gnbData.map((item,index) => {
                    return(
                        <BottomNavigationstyled.MenuItem className={item.className} key={index}
                        onClick={() => {index === 3 && alert('준비중인 콘텐츠에요.')}}>
                            <BottomNavigationstyled.MenuLink to={item.link} title={item.name} num={item.id}>
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