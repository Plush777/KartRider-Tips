import styled, { css } from "styled-components";

export const RankWrap = styled.div`
    position: relative;
`

export const RankList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    overflow-y: auto;
    max-height: var(--main-scroll-height);
    padding-bottom: 70px;

    ${({ theme }) => theme.tablet`
        &::-webkit-scrollbar {
            display: none;
        }

        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
    `};
`

export const RankBoxItem = styled.li`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--background5);
    column-gap: 20px;
    max-height: 100px;
    transition: .3s ease-in-out;
    transition-property: background-color;

    &:last-of-type{
        border-radius: 8px 8px 0 0;
    }

    ${({ theme }) => theme.mobile`
        padding: 12px;
        column-gap: 12px;
        max-height: 80px;
    `};
`

export const RankInnerBox = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: center;

    ${props => props.seq && css`
        min-width: 32px;
    `}

    img{
        border-radius: 8px;
        /* object-fit: scale-down; */
        background-color: #fff;
    }

    ${({ theme }) => theme.tablet`
        img{
            width: 52px;
            height: 52px;
        }
    `};

    ${({ theme }) => theme.mobile`
        img{
            width: 44px;
            height: 44px;
        }
    `};
`

export const RankStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const RankText = styled.span`
    &.number{
        font-size: 1.375rem;
        color: var(--text1);

        &:where([data-number="1"], [data-number="2"], [data-number="3"]){
            color: var(--active);
        }
    }

    &.status {
        margin-left: 1.5px;
        font-size: .8125rem;
        color: var(--text1);
    }

    &.icon{
        font-size: .625rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.7px;
        /* color: var(--red); */
    }

    &.gameName{
        display: flex;
        align-items: center;
        height: 64px;
        padding-left: 20px;
        font-size: 1.25rem;
        color: var(--text1);
    }

    ${({ theme }) => theme.tablet`
        &.gameName{
            font-size: 1.125rem;
        }
    `};

    ${({ theme }) => theme.mobile`
        &.gameName{
            font-size: 1rem;
            padding-left: 15px;
        }

        &.number{
            font-size: 1.25rem;
        }
    `};
`

export const BottomBar = styled.div`
    position: absolute;
    left: 0;
    bottom: calc(40px + 20px);
    width: calc(100% - 14px);
    display: flex;
    align-items: center;
    column-gap: 20px;
    border-radius: 0 0 8px 8px;
    background-color: var(--background1);
    z-index: 990;

    svg{
        width: 8px;
        height: 8px;
    }

    ${RankBoxItem}{
        max-height: 70px;
        border-radius: 0 0 8px 8px;
        border-radius: 0;
    }

    .number{
        font-size: 1.125rem;
    }

    .gameName{
        font-size: 1rem;
    }

    .status{
        font-size: .75rem;
    }

    ${({ theme }) => theme.tablet`
        width: 100%;

        img{
            width: 38px;
            height: 38px;
        }
    `};

    ${({ theme }) => theme.mobile`
        .gameName{
            font-size: .875rem;
        }

        img{
            width: 34px;
            height: 34px;
        }
    `};
`

export const RankButtonWrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`