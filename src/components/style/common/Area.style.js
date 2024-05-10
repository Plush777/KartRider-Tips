import styled, { css } from "styled-components";

export const Wrap = styled.div`
    width: 100%;
    min-height: calc(100vh - 206px);
    background-color: var(--sub-background);
    transition: background .3s ease-in-out;

    ${({ theme }) => theme.tablet`
        min-height: calc(100vh - 469px);
    `}
`

export const Inner = styled.div`
    position: relative;
    max-width: 1300px;
    margin: 0 auto;
    padding: 80px 16px;

    ${({ theme }) => theme.laptopL`
        padding: 36px 16px;
    `};

    ${({ theme }) => theme.small`
        padding: 26px 10px;
    `};
`

export const GroupItem = styled.li`
    position: relative;
    
    &::before{
        content: ${(props) => props.bullet};
        position: absolute;
        top: 9px;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--title);
    }
`

export const GroupContainer = styled.div`
    ${props => props.direction === 'row' && css`
        display: flex;

        ${GroupItem} {
            width: calc(100% / 5);
            display: flex;
            align-content: center;
            text-transform: uppercase;
        }
    `}
`

export const TitleGroup = styled.div`
   margin-bottom: 30px;
`

export const TitleGroupDesc = styled.p`
    line-height: 27px;
    color: var(--text1);
    font-size: 1rem;

    ${({ theme }) => theme.laptopL`
       word-break: keep-all;
    `};

    ${({ theme }) => theme.tablet`
       font-size: 0.875rem;
    `};

    ${({ theme }) => theme.tablet`
        margin-top: 10px;
    `};
`;

export const blankLink = styled.div`
    color: var(--text1);
    font-size: 1rem;
    word-break: keep-all;
`

export const Main = styled.main`
    padding-top: 65px;

    ${({ theme }) => theme.tablet`
        padding-top: 55px;
        padding-bottom: 0;
    `};
`

export const GroupList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.rowGap};
    flex-direction: ${(props) => props.direction};
`

export const MainComponentBox = styled.section`
    &+&{
        margin-top: var(--section-gap);
    }

    +[data-section-name="recentYoutube"]{
        margin-top: calc(var(--section-gap) / 2 + 20px);
    }

    ${({ theme }) => theme.laptop`
        +[data-section-name="recentYoutube"]{
            margin-top: calc(var(--section-gap) / 2 - 20px);
        }
    `};

    ${({ theme }) => theme.tablet`
        +[data-section-name="recentYoutube"]{
            margin-top: calc(var(--section-gap) / 2 + 20px);
        }
    `};

    ${({ theme }) => theme.mobile`
        +[data-section-name="recentYoutube"]{
            margin-top: calc(var(--section-gap) / 2 + 30px);
        }
    `};

    ${({ theme }) => theme.small`
        +[data-section-name="recentYoutube"]{
            margin-top: calc(var(--section-gap) / 2);
        }
    `};
`

export const MainComponentTitle = styled.h2`
    position: relative;
    display: flex;
    align-items: center;
    color: var(--title);
    font-size: 2rem;
    margin-bottom: ${(props) => props.marginBottom};

    ${({ theme }) => theme.laptop`
        font-size: 1.75rem;

        &::before{
            width: 32px;
            height: 32px;
            background-size: 32px;
        }
    `};

    ${({ theme }) => theme.tablet`
        font-size: 1.375rem;

        &::before{
            width: 26px;
            height: 26px;
            background-size: 26px;
        }
    `};

    ${({ theme }) => theme.mobile`
        flex-direction: column;
    `};
`

export const MainComponentTitleBox = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`

export const LottieWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    +.text{
        word-break: keep-all;
    }

    ${(props) => props.lottieName === 'youtube' && css`
        width: 85px;
        height: 85px;
        margin-left: -25px;

        +.text{padding-left: 55px;}
    `}

    ${(props) => props.lottieName === 'news' && css`
        width: 100px;
        height: 100px;
        margin-top: -6px;
        margin-left: -31px;

        +.text{padding-left: 55px;}
    `}

    ${(props) => props.lottieName === 'season' && css`
        width: 80px;
        height: 80px;
        margin-left: -27px;

        +.text{padding-left: 40px;}
    `}

    ${(props) => props.lottieName === 'rank' && css`
        width: 50px;
        height: 50px;

        +.text{padding-left: 55px;}
    `}

    ${(props) => props.lottieName === 'live' && css`
        width: 45px;
        height: 45px;

        +.text{padding-left: 60px;}
    `}

    ${(props) => props.lottieName === 'fire' && css`
        width: 50px;
        height: 50px;
        margin-top: -8px;
        margin-left: -8px;

        +.text{padding-left: 50px;}
    `}

    ${({ theme }) => theme.laptop`
        ${(props) => props.lottieName === 'rank' && css`
            transform: none;
            top: -8px;
        `}

        ${(props) => props.lottieName === 'season' && css`
            transform: none;
            top: -25px;
        `}
    `};

    ${({ theme }) => theme.tablet`
        transform: none;

        ${(props) => props.lottieName === 'live' && css`
            width: 35px;
            height: 35px;
            top: -5px;

            +.text{padding-left: 45px;}
        `}

        ${(props) => props.lottieName === 'fire' && css`
            width: 35px;
            height: 35px;
            top: -2px;
            left: 3px;

            +.text{padding-left: 35px;}
        `}

        ${(props) => props.lottieName === 'youtube' && css`
            width: 60px;
            height: 60px;
            top: -18px;
            margin-left: -12px;

            +.text{padding-left: 45px;}
        `}

        ${(props) => props.lottieName === 'news' && css`
            width: 80px;
            height: 80px;
            top: -26px;
            left: 5px;

            +.text{padding-left: 43px;}
        `}

        ${(props) => props.lottieName === 'rank' && css`
            width: 40px;
            height: 40px;
            left: -5px;

            +.text{padding-left: 43px;}
        `}

        ${(props) => props.lottieName === 'season' && css`
            width: 65px;
            height: 65px;
            top: -22px;
            left: 0;
            margin-left: -20px;

            +.text{padding-left: 40px;}
        `}
    `};
`;

export const MainComponentHead = styled.div`
    margin-top: 20px;

    ${({ theme }) => theme.tablet`
        margin-top: 12px;
    `};
`

export const MainComponentHeadTitle = styled.h3`
    font-size: 1.5rem;
    color: var(--title);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    max-height: 87px;

    ${({ theme }) => theme.laptop`
        font-size: 1.375rem;
    `};

    ${({ theme }) => theme.tablet`
        font-size: 1.125rem;
    `};

    ${({ theme }) => theme.small`
        font-size: 1rem;
    `};
`

export const MainComponentBottom = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 5px;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
    }

    ${({ theme }) => theme.laptop`
        flex-direction: row;
        row-gap: 0;
    `};

    ${({ theme }) => theme.tablet`
        margin-top: 8px;
    `};
`

export const MainComponentBottomDescription = styled.p`
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    color: var(--description);

    @media (max-width: 1200px) {
        &::after{
            display: none;
        }
    }

    &::after{
        content: '';
        width: 1px;
        height: 18px;
        margin: 0 15px;
        background-color: var(--description);
    }

    +time::after{
        display: none;
    }

    ${({ theme }) => theme.laptop`
        font-size: 1.125rem;

        &::after{
            display: block;
            margin: 0 10px;
        }
    `};

    ${({ theme }) => theme.tablet`
        font-size: 1rem;

        &::after{
            margin: 0 10px;
        }
    `};

    ${({ theme }) => theme.small`
        font-size: 0.875rem;
    `};
`

export const MainComponentGroup = styled.ul`
    display: ${props => props.display};
    grid-template-columns: ${props => props.gtc};
    column-gap: 20px;
    row-gap: ${props => props.rg};
    height: 100%;

    ${({ theme }) => theme.laptop`
        flex-direction: column;
        row-gap: 40px;
        grid-template-columns: 1fr;
    `};

    &+&{margin-top: 60px;}
`

export const MainComponentItem = styled.li`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;

    ${({ theme }) => theme.laptop`
        flex: none;
        width: 100%;
        height: auto;
    `};
`

export const MainComponentThumbnailWrapper = styled.div`
    position: relative;
    display: flex;
`

export const MainComponentThumbnail = styled.div`
    position: relative;
    flex: 1;
    padding-top: 56.19%;
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--skeleton);

    img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        aspect-ratio: 5.339/3;
        border-radius: 8px;
        object-fit: cover;
        box-shadow: 0px 1px 4px 2px rgba(0,0,0,0.16);
    }
`

export const MainComponentLink = styled.a`   
    @media (hover: hover) {
        &:hover{
            img{
                transform: scale(1.05);
            }
        }
    }

    img {
        opacity: 0;
        visibility: hidden;
        transition: .3s ease-in-out;
        transition-property: opacity, visibility, transform;
    }

    &.active{
        img, .adultWrap {
            opacity: 1;
            visibility: visible;
        }
    }
`

export const MainComponentArticleWrap = styled.div`

`

export const MainComponentArticleList = styled.ul`

`

export const MainComponentnameDivision = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({ theme }) => theme.tablet`
        flex-direction: column;

        .eps{
            &.type01{
                margin-top: 10px;
                white-space: initial;
               
                >*{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
        }
    `};
`

export const MainComponentInnerDivision = styled.div`
    display: flex;
    align-items: center;

    ${({ theme }) => theme.tablet`
        width: 100%;
    `};
`

export const MainComponentArticleLink = styled.a`
    display: flex;
    align-items: center;
    padding: 67.2px 32px;
    border-bottom: 1px solid var(--stroke2);
    background-color: transparent;

    ${({ theme }) => theme.tablet`
        padding: 50px 0;
    `};

    ${({ theme }) => theme.mobile`
        padding: 35px 0;
    `};
`

export const MainComponentArticleCategory = styled.strong`
    white-space: nowrap;
    font-weight: 500;
    font-size: 1.25rem;
    color: var(--active);

    ${({ theme }) => theme.tablet`
        margin-right: 10px;
        font-size: 1rem;
    `};

    ${({ theme }) => theme.mobile`
        font-size: .875rem;
    `};
`

export const MainComponentArticleTitle = styled.p`
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--title);
    padding-left: 30px;
    padding-right: 20px;

    ${({ theme }) => theme.tablet`
        padding-left: 0;
        font-size: 1.25rem;
        word-break: keep-all;
        line-height: 30px;
    `};

    ${({ theme }) => theme.mobile`
        padding-left: 0;
        font-size: 1.125rem;
        word-break: keep-all;
        line-height: 30px;
    `};
`

export const MainComponentArticleDate = styled.span`
    white-space: nowrap;
    color: var(--description);

    ${({ theme }) => theme.tablet`
        ${props => props.mobileDisplay && `display: none;`}
        margin-top: 3px;
        font-size: .75rem;
    `};
`

export const LoadText = styled.p`
    display: flex;
    justify-content: center;
    line-height: 34px;
    font-size: 1rem;
    color: var(--text1);
    margin-top: 30px;
    height: 34px;
`

export const MainInner = styled.div`
    position: relative;
    min-height: ${props => props.minHeight};
    height: ${props => props.height};

    ${(props) => props.borderBottom && css`
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--text1);
        }
    `}

    ${({ theme }) => theme.tablet`
        ${props => props.name === 'ranking' && css` 
            height: 371px;
        `}

        ${props => props.name === 'season' && css`
            height: auto;
        `}
    `};
`

export const ContainerBox = styled.div`
    flex: 0.5;

    ${({ theme }) => theme.tablet`
        flex: none;
        width: 100%;
    `};
`

export const ContentWrap = styled.div`
    position: relative;
    background-color: var(--main-background);
    transition: background .3s ease-in-out;
`

export const ContentInner = styled.div`
    padding: 80px 16px 105px 16px;
    max-width: 1300px;
    margin: 0 auto;

    ${({ theme }) => theme.laptop`
        padding: 50px 16px;
    `}
`