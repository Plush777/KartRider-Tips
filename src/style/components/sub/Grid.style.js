import styled from "styled-components";

export const Wrap = styled.div`

`

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 80px;
`

export const Item = styled.li`

`

export const InnerItem = styled.div`

`

export const ImgDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;

    img {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }
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

export const NameArea = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
`

export const Name = styled.strong`
    font-weight: normal;
    font-size: 1rem;
`