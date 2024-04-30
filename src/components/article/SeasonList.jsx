import styled, { css } from "styled-components";
import * as ButtonStyled from 'components/style/common/Button.style';
import { format } from 'date-fns';
import calcSeason from "scripts/calcSeason";

const SeasonWrap = styled.div`
   position: relative;
`;

const SeasonGroup = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;
    &+&{margin-top: 30px;}

    ${({ theme }) => theme.tablet`
        &+&{margin-top: 20px;}
    `};
`

const SeasonText = styled.span`
    display: block;
    color: var(--text1);
    font-size: 1.125rem;

    ${props => props.head && css`
        font-weight: 600;
        min-width: 91px;
    `}

    ${props => props.endDate && css`
        color: var(--red);
    `}

    ${({ theme }) => theme.tablet`
        font-size: 1rem;
    `};
`

const ErrorWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--dimmed);
    backdrop-filter: blur(5px);
    border-radius: 8px;
`

const ErrorText = styled.p`
    color: var(--text1);
    font-size: 1rem;
`

const SeasonList = () => {
    const { currentSeasonStart, endDate, daysCount, error } = calcSeason();

    return(
        <SeasonWrap>
            {
                error &&
                <ErrorWrap>
                    <ErrorText>이런, 날짜 계산 중 오류가 발생했어요!</ErrorText>
                    <ButtonStyled.Button type="button" minWidth="100px" onClick={() => window.open('https://open.kakao.com/o/sIZ4nWQb','_target')}>개발자 호출하기</ButtonStyled.Button>
                </ErrorWrap>
            }
            {/* <ErrorWrap>
                <ErrorText>이런, 날짜 계산 중 오류가 발생했어요!</ErrorText>
                <ButtonStyled.Button type="button" minWidth="100px" onClick={() => window.open('https://open.kakao.com/o/sIZ4nWQb','_target')}>개발자 호출하기</ButtonStyled.Button>
            </ErrorWrap> */}
            <SeasonGroup>
                <SeasonText as="h3" head>시즌 시작일</SeasonText>
                <SeasonText as="time">{format(currentSeasonStart,'yyyy-MM-dd')}</SeasonText>
            </SeasonGroup>
            <SeasonGroup>
                <SeasonText as="h3" head>시즌 종료일</SeasonText>
                <SeasonText as="time">{endDate} 오전 8시 59분 (UTC +9)</SeasonText>
            </SeasonGroup>
            <SeasonGroup>
                <SeasonText as="h3" head>남은 날짜</SeasonText>
                <SeasonText as="b" endDate>D-{daysCount}</SeasonText>
            </SeasonGroup>
        </SeasonWrap>
    )
}

export default SeasonList;