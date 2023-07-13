import styled from "styled-components";
import mixins from 'components/style/mixins';

export const Wrap = styled.div`
    position: relative;
    ${mixins.jcc};
    border-radius: 4px;
    height: 300px;
    background-color: var(--skeletonBg);

    img{
        margin: 0 auto;
    }

    ${({ theme }) => theme.tablet`
        flex-direction: column;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, .3);
    `};

    ${({ theme }) => theme.mobile`
        height: 250px;

        img{
            width: 200px;
            height: 187px;
        }
    `};
`