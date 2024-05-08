import styled, { css } from "styled-components";
import { format } from 'date-fns';
import calcSeason from "scripts/calcSeason";
import ContentsState from "components/common/ContentsState";

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

const SeasonList = (state) => {
    const { currentSeasonStart, endDate, daysCount } = calcSeason();

    const renderContentsState = (state) => {
        if (state.state === 'error') {
            return (
                <ContentsState state='error'/>
            )
        }

        else if (state.state === 'seasonReady') {
            return (
                <ContentsState state='seasonReady'/>
            )
        }
    }

    const isState = state.state === 'error' || state.state === 'seasonReady';

    console.log(state);

    return(
        <>
            {renderContentsState(state)}

            {isState ? null : 
                <SeasonWrap>
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
            }
        </>
       
    )
}

export default SeasonList;