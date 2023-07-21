import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const BookThumbnail = styled.div`
    width: 410px;
    height: 500px;
    box-shadow: 3px 7px 12px rgba(0, 0, 0, 0.253);
    background: url("/images/common/img-book-front.jpg") no-repeat center;
    background-size: 410px 500px;
    margin: 0 auto;

    ${({ theme }) => theme.mobile`
        width: calc(100vw - 99px);
        height: auto;
        padding-top: 107.067%;
        background-size: calc(100vw - 99px) 100%;
    `}
`

export const BookFrame = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bgColor);
    z-index: 1000;
`

export const Close = styled.button.attrs({ type: 'button' })`
    position: absolute;
    right: 10px;
    top: 10px;
`

export const Prev = styled.button.attrs({ type: 'button' })`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 50px;
    height: 50px;
`

export const Next = styled(Prev)`
    left: auto;
    right: 0;
`