import styled, { css } from "styled-components";
import { format } from 'date-fns';
import calcSeason from "scripts/calcSeason";

const Wrap = styled.div`
    display: flex;
    flex-direction: column; 
    position: relative;
    height: 100%;
`;

const Group = styled.div`
    display: flex;
    column-gap: 16px;
    margin-bottom: 30px;

    &:last-of-type {
        margin-bottom: 0;
    }

    ${props => props.col && css`
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;
    `}

    ${({ theme }) => theme.tablet`
        margin-bottom: 20px;
    `};
`

const Text = styled.span`
    display: block;
    font-size: 1.125rem;
    color: ${props => props.endDate ? 'var(--red)' : 'var(--text1)'};

    ${props => props.head && css`
        font-weight: 600;
        min-width: 91px;
    `}

    ${({ theme }) => theme.tablet`
        font-size: 1rem;
    `};
`

const SeasonWrap = () => {
    const { currentSeasonStart, endDate, daysCount } = calcSeason();

    return(
        <Wrap>
            <Group>
                <Text as="h3" head>시즌 시작일</Text>
                <Text as="time">{format(currentSeasonStart,'yyyy-MM-dd')}</Text>
            </Group>
            <Group>
                <Text as="h3" head>시즌 종료일</Text>
                {endDate && <Text as="time">{endDate} 오전 8시 59분 (UTC +9)</Text>}
            </Group>
            <Group>
                <Text as="h3" head>남은 날짜</Text>
                {daysCount && <Text as="b" endDate>D-{daysCount}</Text>}
            </Group>
        </Wrap>
    )
}

export default SeasonWrap;