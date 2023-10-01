import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const Box = styled.div`
    &+&{margin-top: 150px;}

    ${({ theme }) => theme.laptop`
        margin-top: 100px;

        &+&{margin-top: 120px;}
    `};

    ${({ theme }) => theme.tablet`
        margin-top: 70px;
    `};

    ${({ theme }) => theme.mobile`
        margin-top: 0;
    `};
`

export const Title = styled.h2`
    position: relative;
    ${mixins.aic};
    ${mixins.font('nexonLv1Gothic', 'var(--title)')}
    font-size: 2rem;
    margin-bottom: 20px;

    &:lang(ja){
        &::before{top: 4px;}
    }

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

        margin-bottom: 10px;
    `};

    ${({ theme }) => theme.mobile`
        flex-direction: column;
    `};
`

export const TitleBox = styled.div`
    position: relative;
    width: 100%;
    ${mixins.aic};

    .lottieWrapper{
        position: absolute;
        top: -6px;
        width: 45px;
        height: 45px;

        >div{
            width: 100%;
            height: 100%;
        }
    }

    .text{padding-left: 55px;}

    ${({ theme }) => theme.tablet`
        .lottieWrapper {
            width: 40px;
            height: 40px;
            top: -9px;

            &.fire{
                top: -20px;
                left: -13px;
                width: 55px;
                height: 45px;

                ~.text{padding-left: 40px;}
            }

            &.news{
                left: -7px;

                ~.text{padding-left: 40px;}
            }
        }

        .text{padding-left: 50px;}
    `};
`

export const Head = styled.div`
    margin-top: 20px;

    ${({ theme }) => theme.tablet`
        margin-top: 12px;
    `};
`

export const HeadTitle = styled.h3`
   font-size: ${({ theme }) => theme.fontSizes.f24};
   ${mixins.font('nexonLv1Gothic', 'var(--title)')}

   ${({ theme }) => theme.laptop`
        font-size: 1.375rem;
    `};

    ${({ theme }) => theme.tablet`
        font-size: ${({ theme }) => theme.fontSizes.f18};
    `};

    ${({ theme }) => theme.small`
        font-size: ${({ theme }) => theme.fontSizes.f16};
    `};
`

export const Bottom = styled.div`
    margin-top: 10px;
    ${mixins.aic};
    ${({ theme }) => theme.tablet`
        margin-top: 8px;
    `};
`

export const BottomDescription = styled.p`
    ${mixins.aic};
    font-size: ${({ theme }) => theme.fontSizes.f20};
    ${mixins.font('nexonLv1Gothic', 'var(--videoDesc)')}

    &::after{
        content: '';
        width: 1px;
        height: 18px;
        margin: 0 15px;
        background-color: #626262;
    }

    &:last-of-type::after{display: none;}

    ${({ theme }) => theme.laptop`
        font-size: ${({ theme }) => theme.fontSizes.f18};
    `};

    ${({ theme }) => theme.tablet`
        font-size: ${({ theme }) => theme.fontSizes.f16};

        &::after{
            margin: 0 10px;
        }
    `};

    ${({ theme }) => theme.small`
        font-size: ${({ theme }) => theme.fontSizes.f14};
    `};
`

export const Group = styled.ul`
    display: ${props => props.display};
    grid-template-columns: ${props => props.gtc};
    column-gap: 20px;
    row-gap: ${props => props.rg};

    ${({ theme }) => theme.laptop`
        flex-direction: column;
        row-gap: 40px;
        grid-template-columns: 1fr;
    `};

    &+&{margin-top: 60px;}
`

export const Item = styled.li`
    ${mixins.fcol};
    flex: ${props => props.flex};
    height: 100%;

    ${({ theme }) => theme.laptop`
        flex: none;
        width: 100%;
        height: auto;
    `};
`

export const Thumbnail = styled.div`
    border-radius: 8px;
    overflow: hidden;
`

export const Img = styled.img`
    aspect-ratio: 5.339/3;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0px 1px 4px 2px rgba(0,0,0,0.16);
    transition: .3s ease-in-out;
`

export const Link = styled.a`   
    @media (hover: hover) {
        &:hover{
            ${Img}{transform: scale(1.05);}
        }
    }
`

export const ArticleWrap = styled.div`
    border-top: 2px solid var(--title);
`

export const ArticleList = styled.ul`
`

export const nameDivision = styled.div`
    ${mixins.aic};
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

export const InnerDivision = styled.div`
    ${mixins.aic};

    ${({ theme }) => theme.tablet`
        width: 100%;
    `};
`

export const ArticleLink = styled.a`
    ${mixins.aic};
    padding: 67.2px 32px;
    border-bottom: 1px solid var(--infoStroke);
    background-color: transparent;

    ${({ theme }) => theme.tablet`
        padding: 50px 0;
    `};
`

export const ArticleCategory = styled.strong`
    min-width: 80px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.f20};
    color: var(--activeColor);

    ${({ theme }) => theme.tablet`
        min-width: 57px;
        font-size: ${({ theme }) => theme.fontSizes.f16};
    `};
`

export const ArticleTitle = styled.p`
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.f24};
    color: var(--title);

    ${({ theme }) => theme.tablet`
        font-size: ${({ theme }) => theme.fontSizes.f20};
        word-break: keep-all;
        line-height: 30px;
    `};
`

export const ArticleDate = styled.span`
    white-space: nowrap;
    color: var(--videoDesc);

    ${({ theme }) => theme.tablet`
        ${props => props.mobileDisplay && `display: none;`}
        margin-top: 3px;
        font-size: ${({ theme }) => theme.fontSizes.f12};
    `};
`