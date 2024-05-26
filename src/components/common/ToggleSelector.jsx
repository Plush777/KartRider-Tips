import { useState } from "react";
import useClickOutside from "hooks/useClickOutside";
import * as T from "style/common/ToggleSelector.style"

export default function ToggleSelector({ data, clickFn }) {
    const [active , setActive] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleActive = (index) => setActive(index);
    const handleToggle = () => setToggle(!toggle);
    const handleClose = () => setToggle(false);

    const link = 'https://kartdrift.nexon.com/kartdrift/ko/news/update/view?threadId=2566733';
    const ref = useClickOutside(handleClose);

    return(
        <T.SelectWrap ref={ref}>
            <T.SelectButton onClick={handleToggle}>설정</T.SelectButton>
            <T.SelectList className={toggle && 'active'}>
                {data?.map((item, index) => {
                    const isLast = index === data.length - 1;
                    const clickActive = !isLast && active === index ? 'active' : '';

                    return(
                        <T.SelectItem key={index}>
                            <T.SelectItemButton 
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
                            </T.SelectItemButton>
                        </T.SelectItem>
                    )
                })}
            </T.SelectList>
        </T.SelectWrap>
    )
}