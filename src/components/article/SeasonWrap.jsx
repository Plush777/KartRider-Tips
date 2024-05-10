"use client";

import styled, { css } from "styled-components";
import { format } from 'date-fns';
import { useState } from "react";
import { itemScore, speedScore, mode, findNextMp } from "data/season";
import ToggleSelector from "components/common/ToggleSelector";

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
        flex: 1;
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

const GroupInner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    ${props => props.mr && css`
        input {
            margin-right: 10px;
        }
    `}

    ${({ theme }) => theme.tablet`
        height: 40px;
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

const CalcInput = styled.input`
    width: 100%;
    font-size: 1rem;

    &::placeholder{
        font-size: .875rem;
    }
`

const CalcResultArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    width: 100%;
    height: 100%;
    background-color: var(--background5);

    ${({ theme }) => theme.tablet`
        height: 170px;
    `};
`

const CalcResultText = styled.span`
    text-align: center;
    word-break: keep-all;
    font-size: 1.125rem;
    color: var(--text1);
`

const GroupRight = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const SeasonWrap = ({ currentSeasonStart, endDate, daysCount }) => {
    const [currentMp, setCurrentMp] = useState('');
    const [mpData, setMpData] = useState(itemScore);

    const handleChange = (event) => {
        const removedComma = Number(event.target.value.replaceAll(',', ''));
        setCurrentMp(removedComma);
    };

    const handleClick = (index) => {
        if (index === 0) {
            setMpData(itemScore);
        } else if (index === 1) {
            setMpData(speedScore);
        }

        if (currentMp !== 0) {
            setCurrentMp('');
        }
    }

    /* 인풋 값 콤마때문에 보여줄 때만 문자열로 타입변경 */
    const stringCurrent = currentMp.toLocaleString();

    return(
        <Wrap>
            <Group>
                <Text as="h3" head>시즌 시작일</Text>
                <Text as="time">{format(currentSeasonStart,'yyyy-MM-dd')}</Text>
            </Group>
            <Group>
                <Text as="h3" head>시즌 종료일</Text>
                <Text as="time">{endDate} 오전 8시 59분 (UTC +9)</Text>
            </Group>
            <Group>
                <Text as="h3" head>남은 날짜</Text>
                <Text as="b" endDate>D-{daysCount}</Text>
            </Group>
            <Group col>
                <GroupInner mr>
                    <Text as="label" htmlFor="input01" head>점수 계산</Text>
                    <CalcInput 
                        type="text" 
                        id="input01" 
                        placeholder="현재 점수를 입력하세요"
                        value={stringCurrent}
                        onChange={handleChange}
                        maxLength={7}
                    />

                    <GroupRight>
                        <ToggleSelector data={mode} clickFn={handleClick} itemScore={itemScore} speedScore={speedScore}/>
                    </GroupRight>
                </GroupInner>
                
                <CalcResultArea>
                    <CalcResultText>{findNextMp(mpData, currentMp)}</CalcResultText>
                </CalcResultArea>
            </Group>
        </Wrap>
    )
}

export default SeasonWrap;