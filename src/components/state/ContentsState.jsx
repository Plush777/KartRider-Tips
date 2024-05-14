import styled from "styled-components";
import * as ButtonStyled from 'components/style/common/Button.style';
import { message } from "const";

const Wrap = styled.div`
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

export default function ContentsState ({ state }) {
    const renderCondition = (state) => {
        if (state === 'error') {
            return (
                <>
                    <Text>{message.seasonError}</Text>
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
                <Text>{message.seasonReady}</Text>
            )
        }
    }


    return(
        <Wrap>
            {renderCondition(state)}
        </Wrap>
    )
}