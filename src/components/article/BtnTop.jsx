import styled from "styled-components"
import React, { useState , useEffect } from "react"
import mixins from "components/style/mixins"
import { ReactComponent as SCtopArrow } from "static/svg/ico-top-arrow.svg"

const BtnArea = styled.div`
    position: fixed;
    right: 15px;
    bottom: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.15);
    background-color: #fff;
`

const TopBtn = styled.button.attrs({type: 'button'})`
    ${mixins.fc}
    ${mixins.whFull}
`

const BtnTop = () => {

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setIsShow(true)
            } else {
                setIsShow(false);
            }
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return( 
        <>
            {isShow &&
                <BtnArea>
                    <TopBtn onClick={scrollToTop}>
                        <SCtopArrow width="20px" height="20px" fill="#000"/>
                        <span className="hidden">위로 올라가기</span>
                    </TopBtn>
                </BtnArea>
            }
        </>
    );
}

export default BtnTop;