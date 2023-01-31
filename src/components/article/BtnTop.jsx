import styled from "styled-components"
import React, { useState , useEffect, useRef } from "react"

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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url('../../../images/common/ico-top-arrow.svg') no-repeat center;
    background-size: 20px 20px;
`

const BtnTop = () => {

    const ref = useRef(null);

   const executeScroll = () => ref.current.scrollIntoView()    

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
                    <TopBtn onClick={scrollToTop}/>
                </BtnArea>
            }
        </>
    );
}

export default BtnTop;