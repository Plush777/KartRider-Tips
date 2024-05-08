import styled from "styled-components";
import * as ButtonStyled from 'components/style/common/Button.style';

const Wrap = styled.div`
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
    background-color: var(--skeleton);
    border-radius: 8px;
`

const Text = styled.p`
    color: var(--text1);
    font-size: 1rem;
`

const ContentsState = ({ state }) => {
    const renderCondition = (state) => {
        if (state === 'error') {
            return (
                <>
                    <Text>이런, 날짜 계산 중 오류가 발생했어요!</Text>
                    <ButtonStyled.Button 
                    type="button" 
                    minWidth="100px" 
                    onClick={() => window.open('https://open.kakao.com/o/sIZ4nWQb','_target')}>
                        개발자 호출하기
                    </ButtonStyled.Button>
                </>
            )
        }

        else if (state === 'seasonReady') {
            return (
                <Text>곧 새로운 시즌이 시작됩니다!</Text>
            )
        }
    }


    return(
        <Wrap>
            {renderCondition(state)}
        </Wrap>
    )
}

export default ContentsState;