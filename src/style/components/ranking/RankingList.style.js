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

    ${props => props.direction === 'column' && !props.seq && css`
        justify-content: center;

        ${props => props.styleType === 'bottom' ? css`
            padding-left: 10px;
        ` : css`
            padding-left: 20px;
        `}
    `}

    ${props => props.seq && css`
        min-width: 32px;
        align-items: center;
    `}

    ${props => props.type === 'gameData' && css`
        align-items: center;
        column-gap: 5px;
    `}

    ${props => props.type === 'gameDataContainer' && css`
        column-gap: 10px;
    `}

    
`

export const RankImgBox = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 8px;

    img{
        border-radius: 8px;
    }

    ${({ theme }) => theme.tablet`
        width: 52px;
        height: 52px;
    `};

    ${({ theme }) => theme.mobile`
        width: 44px;
        height: 44px;
    `};
`

export const RankStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const RankText = styled.span`
    ${props => props.styleProp === 'number' && css`
        font-size: 1.375rem;
        color: var(--text1);

        &:where([data-number="1"], [data-number="2"], [data-number="3"]){
            color: var(--active);
        }

        ${props => props.styleType === 'bottom' && css`
            font-size: 1.125rem;
        `}
    `}

    ${props => props.styleProp === 'status' && css`
        margin-left: 1.5px;
        font-size: .8125rem;
        color: var(--text1);

        ${props => props.styleType === 'bottom' && css`
            font-size: .75rem;
        `}
    `}

    ${props => props.styleProp === 'icon' && css`
        font-size: .625rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.7px;
    `}
    
    ${props => props.styleProp === 'gameName' && css`
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        color: var(--text1);
        padding-bottom: 10px;
        font-weight: 600;

        ${props => props.styleType === 'bottom' && css`
            font-size: 1rem;
            padding-bottom: 5px;
        `}
    `}

    ${props => props.styleProp === 'gameDataTitle' && css`
        font-size: .875rem;
        color: var(--description);

        ${props => props.styleType === 'bottom' && css`
            font-size: .75rem;
        `}
    `}

    ${props => props.styleProp === 'gameData' && css`
        font-size: .875rem;
        color: var(--text1);

        ${props => props.styleType === 'bottom' && css`
            font-size: .75rem;
        `}
    `}



    ${({ theme }) => theme.tablet`
        ${props => props.styleProp === 'gameName' && css`
            font-size: 1.125rem;
        `}
    `};

    ${({ theme }) => theme.mobile`
        ${props => props.styleProp === 'gameName' && css`
            font-size: 1rem;
            padding-left: 15px;
        `}

        ${props => props.styleProp === 'number' && css`
            font-size: 1.25rem;
        `}
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