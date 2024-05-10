import styled from "styled-components";
import { useState } from "react";
import useClickOutside from "hooks/useClickOutside";

const ToggleSelectWrap = styled.div`
    position: relative;
`

const ToggleSelectButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    height: 40px;
    border: 1px solid var(--stroke1);
    border-radius: 6px;
    font-size: .875rem;
    color: var(--text1);
    background-color: var(--background2);
    z-index: 10;
`

const ToggleSelectList = styled.ul`
    position: absolute;
    top: 50px;
    right: 0;
    min-width: 120px;
    border: 1px solid var(--stroke1);
    border-radius: 6px;
    background-color: var(--background2);
    transform: scale(0);
    opacity: 0;
    transition: .3s ease-in-out;
    transition-property: transform, opacity;
    transform-origin: top right;

    &.active {
        transform: scale(1);
        opacity: 1;
    }
`

const ToggleSelectItem = styled.li`
    height: 40px;
    border-bottom: 1px solid var(--stroke1);

    &:last-of-type {
        border-bottom: 0;
    }
`

const ToggleSelectItemButton = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 100%;
    height: 100%;
    font-size: .875rem;
    color: var(--text1);
    background-color: transparent;
    transition: background-color .2s;

    &.openInNew::after{
        width: 17px;
        height: 17px;
        background-size: 17px;
    }

    &.active{
        color: var(--active);
    }
`

const ToggleSelector = ({ data, clickFn }) => {
    const [active , setActive] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleActive = (index) => setActive(index);
    const handleToggle = () => setToggle(!toggle);
    const handleClose = () => setToggle(false);

    const link = 'https://kartdrift.nexon.com/kartdrift/ko/news/update/view?threadId=2499938';
    const ref = useClickOutside(handleClose);

    return(
        <ToggleSelectWrap ref={ref}>
            <ToggleSelectButton onClick={handleToggle}>설정</ToggleSelectButton>
            <ToggleSelectList className={toggle && 'active'}>
                {data?.map((item, index) => {
                    const isLast = index === data.length - 1;
                    const clickActive = !isLast && active === index ? 'active' : '';

                    return(
                        <ToggleSelectItem key={index}>
                            <ToggleSelectItemButton 
                                type={isLast ? null : 'button'}
                                href={isLast ? link : null}
                                onClick={() => {
                                    clickFn(index);
                                    !isLast && handleActive(index);
                                    handleClose();
                                }}
                                className={`${clickActive} ${isLast ? 'openInNew' : ''}`}
                                as={isLast ? 'a' : 'button'}
                                target={isLast ? '_blank' : null}
                            >
                                {item}
                            </ToggleSelectItemButton>
                        </ToggleSelectItem>
                    )
                })}
            </ToggleSelectList>
        </ToggleSelectWrap>
    )
}

export default ToggleSelector;