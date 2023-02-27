import styled from "styled-components";
import { Link } from "react-router-dom";

const AccNav = styled.div`
    position:absolute; 
    top:0; 
    left:0; 
    z-index:999999999; 
    width:100px; 
    height:30px;

    a{
        display:block; 
        position:absolute; 
        left:0; 
        top:0; 
        overflow:hidden; 
        width:1px; 
        height:1px; 
        margin-left:-1px; 
        margin-bottom:-1px; 
        text-align:center; 
        color:#fff; 
        white-space:nowrap;

        &:focus,&:hover,&:active{
            z-index:1000; 
            width:100%; 
            height:auto; 
            padding:5px 0;
            background:#444;
            font-size: 0.875rem;
            color:#fff;
            font-weight:700;
        }
    }
`

const SkipNavigation = () => {
    return ( 
        <AccNav>
            <Link to="#main">본문 바로가기</Link>
            <Link to="#gnb">메뉴 바로가기</Link>
        </AccNav>
    );
}

export default SkipNavigation;