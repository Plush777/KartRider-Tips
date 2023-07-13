import styled, { css } from "styled-components";
import mixins from 'components/style/mixins';

export const Transition = styled.div`
    opacity: 0;
    visibility: hidden;
    transition: .75s ease-in-out;
    transform: translateY(-25px);

    ${props => props.type01 && css`
        display: inherit;
        flex-direction: inherit;
        align-items: inherit;
    `}

    &.on{
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
    }
`

export const Wrap = styled.article`
    
`

export const Section = styled.section`
    height: 100%;
    padding-top: 150px;

    ${({ theme }) => theme.tablet`
        padding-top: 130px;
    `}

    &.type01{
        height: 929px;
        position: relative;
        width: 100%;
        background: url('/images/bg/bg-landing.webp') no-repeat;
        background-position: bottom;
        background-size: 100%;

        @media (max-height: 800px){
            height: 100vh;
        }

        @media (max-width: 1200px){
            background-size: cover;
        }
    }

    &.type02{
        padding-top: 60px;
        height: 868px;
        background: #99C8FF url('/images/bg/bg-landing02.webp') no-repeat center;

        @media (max-width: 1400px){
            height: auto;
            background-size: cover;
            padding: 40px 0;
        }
    }

    &.type03{
        padding-top: 180px;
        height: 5363px;
        background-color: #000;

        @media (max-width: 1400px){
            padding: 100px 20px;
            height: auto;
        }
    }
`

export const TitleArea = styled.div`
    ${mixins.jcc};
    margin-bottom: 60px;
    text-align: center;
    letter-spacing: 0.125rem;

    ${props => props.type02 && css`
        margin-bottom: 0;
        font-weight: 600;
    `}
`

export const Title = styled.h2`
    display: block;
    font-size: 4.125rem;
    color: #fff;
    font-weight: 600;
    transition: .3s ease-in-out;
    word-break: keep-all;

    @keyframes fadeUp {
        0%{
            opacity: 0;
            transform: translateY(30px);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    animation: ${props => props.type02 ? null : 'fadeUp 1s ease-in-out forwards'};

    &.col{
        ${mixins.fcol};
        align-items: center;
    }

    @media (max-width: 1200px){
        font-size: 2.625rem;
    }
`

export const Title02 = styled.span`
    font-size: 2rem;
    color: #fff;

    &:nth-of-type(2){
        margin: 7px 0;
        font-size: 1.625rem;
    }

    ${({ theme }) => theme.tablet`
        font-size: 1.5rem;

        &:nth-of-type(2){
            font-size: 1.125rem;
            margin: 5px 0;
        }
    `}
`

export const TitleTxtArea = styled.div`
    ${mixins.aic};
    margin-top: 10px;

    ${({ theme }) => theme.tablet`
        flex-wrap: wrap;
        justify-content: center;
    `}
`

export const TitleTxt = styled(Title)`
    &:not(:last-of-type){
        margin-right: 15px;
        
        &::after{
            content: '';
            display: inline-block;
            width: 17px;
            height: 29px;
            vertical-align: text-bottom;
            background: url('/images/common/ico-comma.svg') no-repeat center;
        }

        @media (max-width: 1200px){
            &::after{
                background-size: 10px;
                background-position: bottom;
            }
        }
    }

    ${props => props.dot && css`
        &:last-of-type{
            &::after{
                content: '';
                position: relative;
                top: 8px;
                display: inline-block;
                width: 12px;
                height: 12px;
                margin-left: 7px;
                border-radius: 50%;
                background-color: #fff;
            }

            @media (max-width: 1200px){
                &::after{
                    width: 8px;
                    height: 8px;
                    top: 4px;
                    margin-left: 4px;
                }
            }

            ${({ theme }) => theme.tablet`
                &::after{
                    top: -6px;
                }
            `}
        }
    `}

    ${({ theme }) => theme.tablet`
        display: flex;
        align-items: flex-end;
        justify-content: center;

        &:not(:last-of-type){
            margin-right: 10px;
        }
    `}

    @media (max-width: 537px){
        &:nth-of-type(2){
            margin-right: 0;
        }

        &:last-of-type{
            margin-top: 10px;
        }
    }
`

export const Obj = styled.div`
    position: absolute;
    transition: .5s ease-in-out;
    img{
        height: auto;
    } 

    ${props => props.obj1 && css`
        @keyframes obj1Move {
            0%{
                opacity: 0;
                top: 300px;
                left: 80px;
            }

            100%{
                opacity: 1;
                top: 250px;
                left: 150px;
            }
        }

        animation: obj1Move 1s ease-in-out forwards;

        img{
            width: 300px;
        }

        @media (max-width: 1860px) and (max-height: 800px){
            @keyframes obj1Move {
                0%{
                    opacity: 0;
                    top: 380px;
                    left: 0;
                }

                100%{
                    opacity: 1;
                    top: 330px;
                    left: 50px;
                }
            }

            img{
                width: 250px;
            }
        }

        @media (max-width: 1200px){
            display: none;
        }
    `}

    ${props => props.obj2 && css`
        opacity: 0;
        top: 470px;
        width: 100%;

        @keyframes obj2Move {
            0%{
                opacity: 0;
            }

            100%{
                opacity: 1;
            }
        }

        animation: obj2Move 1s ease-in-out forwards;
        animation-delay: .4s;

        img{
            width: 340px;
            margin: 0 auto;
        }

        @media (max-width: 1860px) and (max-height: 800px){
            img{
                width: 250px;
            }
        }
    `}

    ${props => props.obj3 && css`
        top: 500px;
        right: -250px;

        @keyframes obj3Move {
            0%{
                right: -250px;
            }

            100%{
                right: 40px;
            }
        }

        animation: obj3Move 1s ease-in-out forwards;
        animation-delay: .8s;

        img{
            width: 240px;
        }

        @media (max-width: 1860px) and (max-height: 800px){
            img{
                width: 200px;
            }
        }

        @media (max-width: 1200px){
            top: 590px;

            img{
                width: 160px;
            }
        }

        ${({ theme }) => theme.tablet`
            display: none;
        `}
    `}
`

export const ButtonArea = styled.div`
    display: inline-flex;
    margin-top: 60px;

    @media (max-width: 1200px){
        margin-top: 40px;
    }
`

export const UserBoxWrapper = styled.div`
    margin: 90px auto auto auto;
    max-width: 1300px;

    ${({ theme }) => theme.laptop`
        margin: 70px auto auto auto;
    `}
`

export const UserBoxList = styled.ul`
    ${mixins.aic};
    column-gap: 50px;

    @media (max-width: 1400px){
        flex-direction: column;
        row-gap: 30px;
    }
`

export const UserBoxItem = styled.li`
    flex: 1;
    padding: 20px 37px;
    border-radius: 10px;
    background-color: #fff;

    img{
        width: 210px;
        height: 210px;
        margin: 0 auto;
    }

    &:last-of-type{
       img{
            width: 190px;
            height: 190px;
       }

       p{
            margin-top: 20px;
       }
    }

    @media (max-width: 1400px){
        flex: none;
        max-width: 650px;
        width: 100%;

        img,&:last-of-type img{
            width: 80px;
            height: 80px;
        }

        &:last-of-type{
            p{
                margin-top: 0;
            }
        }
    }

    ${({ theme }) => theme.tablet`
        max-width: calc(100vw - 40px);
        padding: 16px;
    `}
`

export const UserBoxTitle = styled.p`
    word-break: keep-all;
    text-align: center;
    margin-bottom: 60px;
    font-size: 1.625rem;
    color: #333;

    &::before{
        content: open-quote;
    }

    &::after{
        content: close-quote;
    }

    @media (max-width: 1400px){
        font-size: 1rem;
        margin-bottom: 35px;
    }
`

export const UserBoxName = styled.span`
    display: block;
    text-align: center;
    font-size: 1.625rem;
    color: #888;

    @media (max-width: 1400px){
        font-size: 0.875rem;
    }
`

export const ContentsWrap = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 200px auto auto auto;

    ${({ theme }) => theme.tablet`
        margin: 100px auto auto auto;
    `}
`

export const ContentsList = styled.ul`
    ${mixins.fcol};
    row-gap: 300px;

    @media (max-width: 1400px){
        row-gap: 200px;
    }

    ${({ theme }) => theme.tablet`
        row-gap: 150px;
    `}
`

export const ContentsItem = styled.li`
    ${mixins.aic};
    column-gap: 60px;

    &:nth-child(even){
        flex-direction: row-reverse;
    }

    &:nth-of-type(3){
        column-gap: 50px;
    }

    @media (max-width: 1400px){
        img{
            width: 500px;
            height: auto;
        }
    }

    @media (max-width: 1200px){
        img{
            width: 400px;
        }
    }

    ${({ theme }) => theme.tablet`
        flex-direction: column;

        &:nth-child(even){
            flex-direction: column;
        }

        img{
            width: 330px;
        }

        ${ButtonArea}{
            margin-top: 0;
        }
    `}

    ${({ theme }) => theme.mobile`
        img{
            width: 250px;
        }
    `}
`

export const ContentsTxtBox = styled.div`
    ${mixins.fcol};

    ${({ theme }) => theme.tablet`
        max-width: 330px;
    `}
`

export const ContentsTitle = styled.h3`
    font-size: 3.75rem;
    color: #F5F5F7;

    @media (max-width: 1400px){
        font-size: 3.25rem;
    }

    @media (max-width: 1200px){
        font-size: 2.625rem;
    }

    ${({ theme }) => theme.tablet`
        margin-top: 10px;
        font-size: 1.875rem;
    `}
`

export const ContentsDescription = styled.p`
    margin-top: 10px;
    margin-bottom: 70px;
    font-size: 2rem;
    color: #F5F5F7;
    word-break: keep-all;

    @media (max-width: 1400px){
        font-size: 1.625rem;
    }

    @media (max-width: 1200px){
        font-size: 1.375rem;
        margin-bottom: 40px;
    }

    ${({ theme }) => theme.tablet`
        margin-bottom: 35px;
        font-size: 1rem;
    `}
`

export const EndArea = styled.div`
    ${mixins.fcol};
    align-items: center;
    margin-top: 300px;
    padding-bottom: 200px;
    text-align: center;

    @media (max-width: 1400px){
        padding-bottom: 0;
    }

    @media (max-width: 1200px){
        margin-top: 200px;
    }
`

export const EndTxt = styled.strong`
    color: #fff;
    font-size: 3.75rem;
    font-weight: 600;
    word-break: keep-all;

    @media (max-width: 1200px){
        font-size: 2.625rem;
    }

    ${({ theme }) => theme.tablet`
        font-size: 1.875rem;
    `}
`

export const EndDesc = styled.p`
    margin-top: 30px;
    color: #ABABAB;
    font-size: 2rem;
    font-weight: 500;
    word-break: keep-all;

    &+&{margin-top: 5px;}

    @media (max-width: 1200px){
        font-size: 1.5rem;
    }

    ${({ theme }) => theme.tablet`
        margin-top: 15px;
        font-size: 1.25rem;
    `}
`