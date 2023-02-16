import styled from "styled-components";
import mixins from 'components/style/mixins';

export const CardList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 32px;
`

export const CardItem = styled.li`
    height: 288px;
    border-radius: 4px;
    background-color: #d9d9d9;
`