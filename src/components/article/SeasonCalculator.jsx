import styled from "styled-components";
import { useState } from "react";
import { itemScore, speedScore, mode, findNextMp } from "data/season";
import ToggleSelector from "components/common/ToggleSelector";
import MainTitle from 'components/article/MainTitle';
import { lottieSrc, mainTitle } from "const";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    column-gap: 16px;
    margin-top: 60px;

    ${({ theme }) => theme.tablet`
        margin-bottom: 20px;
    `};
`;

const Inner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;

    input {
        margin-right: 10px;
    }

    ${({ theme }) => theme.tablet`
        height: 40px;
    `};
`;

const Input = styled.input`
    width: 100%;
    font-size: 1rem;

    &::placeholder{
        font-size: .875rem;
    }
`

const Result = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    width: 100%;
    height: 170px;
    background-color: var(--background5);

    ${({ theme }) => theme.tablet`
        height: 170px;
    `};
`

const ResultText = styled.p`
    text-align: center;
    word-break: keep-all;
    font-size: 1.125rem;
    color: var(--text1);
`

const SeasonCalculator = () => {
    const [currentMp, setCurrentMp] = useState('');
    const [mpData, setMpData] = useState(itemScore);

    const koRegexp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
    const enRegexp = /[a-zA-Z]/;
    const specialRegexp = /[`!@#$%^&*()_+\-=[\]{};':"\\|.<>/?~]/;

    const handleChange = (event) => {
        const regexpCondition = koRegexp.test(event.target.value) 
        || enRegexp.test(event.target.value) 
        || specialRegexp.test(event.target.value);

        if (regexpCondition) {
            alert('숫자만 입력할 수 있습니다');
            setCurrentMp('');
            return;
        }

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
            <MainTitle 
                lottieName="calculator"
                lottieSrc={lottieSrc.calculator}
                title={mainTitle.calculator}
                marginBottom="20px"
            />

            <Inner>
                <Input 
                    type="text" 
                    id="input01" 
                    placeholder="현재 점수를 입력하세요"
                    value={stringCurrent}
                    onChange={handleChange}
                    maxLength={7}
                />
                <ToggleSelector data={mode} clickFn={handleClick} itemScore={itemScore} speedScore={speedScore}/>
            </Inner>
            
            <Result>
                <ResultText>{findNextMp(mpData, currentMp)}</ResultText>
            </Result>
        </Wrap>
    )
}

export default SeasonCalculator;