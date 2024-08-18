import styled from "styled-components";

export const Wrap = styled.div`
    margin-top: 20px;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    &.first {
        margin-bottom: 10px;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || "row"};
    column-gap: ${props => props.columnGap};
    row-gap: ${props => props.rowGap};
    width: 100%;
`