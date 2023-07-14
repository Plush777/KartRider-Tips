'use client';

import SCclip from "svg/ico-clip.svg";
import useSticky from "hooks/useSticky";
import * as Stickystyled from "components/style/common/Sticky.style";
import useClipBoard from "hooks/useClipBoard";
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from "redux/store/store";
import useTimeout from 'hooks/useTimeout';
import { useTranslation } from 'react-i18next';

const BtnClipBoard = () => {

    const dispatch = useDispatch();
    const [isShow] = useSticky();
    const [onCopy] = useClipBoard();
    const { t } = useTranslation();
    let { clipBoard } = useSelector(state => state.toggle);
    
    const handleCilpBoard = () => {
        onCopy(window.location.href);
        dispatch(setToggle({
            clipBoard: true
        }));
    }

    useTimeout(() => {
        clipBoard && dispatch(setToggle({
            clipBoard: false
        }));
    }, 2000)

    return ( 
        <>
            {isShow &&
                <Stickystyled.BtnArea className="type02">
                    <Stickystyled.TopBtn onClick={handleCilpBoard}>
                        <SCclip width="20px" height="20px" fill="#000"/>
                        <span className="hidden">{t(`clipBoard.txt`)}</span>
                    </Stickystyled.TopBtn>
                </Stickystyled.BtnArea>
            }
        </>
     );
}

export default BtnClipBoard;