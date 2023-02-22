import * as Headerstyled from "components/style/layout/Header.style";
import { useDispatch } from "react-redux";
import { setOpenInNew } from "redux/store/store";
import useBodyScrollLock from 'hooks/useBodyScrollLock';

const OpenInNew = () => {
    const { lockScroll } = useBodyScrollLock();
    const dispatch = useDispatch();

    const handleOpen = () => {
        dispatch(setOpenInNew(true));
        lockScroll();
    }

    return ( 
        <Headerstyled.OpenInNewArea>
            <Headerstyled.BtnOpenInNew onClick={handleOpen}>
                <span className="hidden">카트라이더 홈페이지 바로가기</span>
            </Headerstyled.BtnOpenInNew>
        </Headerstyled.OpenInNewArea>
     );
}

export default OpenInNew;