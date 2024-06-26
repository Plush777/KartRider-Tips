import styled from "styled-components";

export const Wrap = styled.div`

`

export const List = styled.ul`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    column-gap: 20px;
    row-gap: 80px;

    ${({ theme }) => theme.tablet`
        row-gap: 40px;
    `};
`

export const Item = styled.li`
    position: relative;
`

export const InnerItem = styled.div`
    margin-bottom: 20px;
`

export const ImgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Tag = styled.span`
    position: absolute;
    top: 8px;
    left: 8px;
    color: #fff;
    padding: 5px;
    border-radius: 6px;
    font-size: .75rem;
    background-color: ${props => props.backgroundColor};

    &.gray {
        background-color: var(--gray-background);
    }

    &.green {
        background-color: var(--green-background);
    }

    &.blue {
        background-color: var(--blue-background);
    }

    &.purple {
        background-color: var(--purple-background);
    }

    &.orange {
        background-color: var(--orange-background);
    }

    &.red {
        background-color: var(--red-background);
    }
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
`

export const InnerBox = styled.div`
    display: flex;
    align-items: center;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    column-gap: 7px;

    svg {
        margin-top: -3px;
        stroke-width: 2px;
    }
`

export const Text = styled.strong`
    font-weight: normal;
    font-size: ${props => props.fontSize || "1rem"};
    line-height: 20px;
`

export const CollapseWrap = styled.div`
  
`

export const CollapseList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const CollapseItem = styled.li`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || "row"};
    column-gap: ${props => props.columnGap};
    row-gap: ${props => props.rowGap};
    width: 100%;
`

export const StatGraph = styled.div`
    width: 25px;
    height: 15px;
    background-color: var(--title);
`