import styled from "styled-components";
import tabData from '../../data/tab/tab.json';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const TabWrap = styled.div`
    width: 100%;
    height: 80px;
    background-color: #fff;
`

const TabWrapInner = styled.div`
    display: flex;
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    padding: 15px 0;
`

const TabInfo = styled.div`
    min-width: 125px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #ddd;
    background-color: #f2f2f2;
`

const TabInfoTxt = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: 'nexonLv1Gothic';
    color: #626262;

    &::before{
        content: '';
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: 22px;
        height: 22px;
        background-image: ${props => `url('../images/common/ico-tab0${props.num}.svg')`};
        background-repeat: no-repeat;
        background-position: center;
    }

    &::after{
        content: '';
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 22px;
        height: 22px;
        background: url('../images/common/ico-arrow-right.svg') no-repeat center;
    }
`

const TabList = styled.ul`
    display: flex;
    margin-left: 20px;
`

const TabItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 50px;
    border-radius: 25px;

    >a{
        font-family: 'nexonLv1Gothic';
        font-size: 18px;
        color: #333;
    }

    &.active{
        >a{
            color: #fff;
        }
        background-color: #333;
    }
`

const SubTab = () => {

    const {pathname} = useLocation();
    let [isActive,setIsActive] = useState(0);
    let [imgNum,setImgNum] = useState('');

    useEffect(() => {
        if(pathname.startsWith('/mode')){
            setImgNum('1');
        }
    },[pathname])

    const handleItemClick = idx => {
        setIsActive(idx);
    }

    return ( 
        <TabWrap>
            <TabWrapInner>
                <TabInfo>
                    <TabInfoTxt num={imgNum}>모드</TabInfoTxt>
                </TabInfo>
                <TabList>
                    {tabData.mode.map((item, index) => {
                        return (
                            <TabItem key={index} className={isActive === index ? "active" : ''} 
                            onClick={() => handleItemClick(index)}>
                                <Link to={item.route}>{item.name}</Link>
                            </TabItem>
                        )})
                    }
                </TabList>
            </TabWrapInner>
        </TabWrap>
    );
}

export default SubTab;