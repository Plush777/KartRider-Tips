import styled from "styled-components";

const ImgArea = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99999;
`

const Img = styled.img`
    position: inherit;
    top: inherit;
    left: inherit;
    transform: inherit;
    z-index: inherit;
`

const Loading = () => {
    return ( 
        <>
            <ImgArea>
                <Img src="../../images/common/img-loading.png" alt="로딩중"/>
            </ImgArea>
        </>
     );
}

export default Loading;