"use client";

import styled, { css } from "styled-components";
import { format } from 'date-fns';
import { useState } from "react";
import * as Buttonstyled from "components/style/common/Button.style"; 
import { itemScore, speedScore, mode, findNextMp } from "data/season";

const Wrap = styled.div`
   position: relative;
`;

const Group = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;
    &+&{margin-top: 30px;}

    ${props => props.col && css`
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;
    `}

    ${({ theme }) => theme.tablet`
        &+&{margin-top: 20px;}
    `};
`

const GroupInner = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.span`
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

const CalcInput = styled.input`
    height: 40px;
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
    height: 170px;
    background-color: var(--background5);
`

const CalcResultText = styled.span`
    font-size: 1.125rem;
    color: var(--text1);
`

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    margin-left: 10px;
`

const SeasonWrap = ({ currentSeasonStart, endDate, daysCount }) => {
    const [currentMp, setCurrentMp] = useState('');
    const [active , setActive] = useState(0);
    const [mpData, setMpData] = useState(itemScore);

    const handleChange = (event) => {
        const removedComma = Number(event.target.value.replaceAll(',', ''));
        setCurrentMp(removedComma);
    };

    const handleClick = (index) => {
        setActive(index);

        if (index === 0) {
            setMpData(itemScore);
        } else if (index === 1) {
            setMpData(speedScore);
        }
    }

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
                <GroupInner>
                    <Text as="label" htmlFor="input01" head>점수 계산</Text>
                    <CalcInput 
                        type="text" 
                        id="input01" 
                        placeholder="현재 점수를 입력하세요"
                        value={stringCurrent}
                        onChange={handleChange}
                        maxLength={7}
                    />
                    <ButtonGroup>
                        {mode?.map((item, index) => {
                            const clickActive = active === index ? 'active' : '';

                            return(
                                <Buttonstyled.Button 
                                key={index} 
                                className={clickActive} 
                                onClick={() => handleClick(index)}>
                                    {item}
                                </Buttonstyled.Button>
                            )
                        })}
                    </ButtonGroup>
                </GroupInner>
                
                <CalcResultArea>
                    <CalcResultText>{findNextMp(mpData, currentMp)}</CalcResultText>
                </CalcResultArea>
            </Group>
        </Wrap>
    )
}

export default SeasonWrap;