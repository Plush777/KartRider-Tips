import styled, { css } from "styled-components";

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

    ${(props) => props.lottieName === 'calculator' && css`
        width: 38px;
        height: 38px;

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

        ${(props) => props.lottieName === 'calculator' && css`
            width: 30px;
            height: 30px;
            top: -5px;

            +.text{padding-left: 43px;}
        `}
    `};
`;