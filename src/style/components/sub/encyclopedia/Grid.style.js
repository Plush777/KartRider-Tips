import styled from "styled-components";

export const Wrap = styled.div`
    position: relative;
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
    .gridTag, .gridImage, .gridButton, .noImageDiv {
        opacity: 0;
        transition: opacity .3s ease-in-out;    
    }

    &.loaded {
        .gridTag, .gridImage, .gridButton, .noImageDiv {
            opacity: 1;
        }
    }
`

export const ImgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        object-fit: contain;
        border-radius: 6px;
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

export const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 20px;
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
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "1rem"};
    color: ${props => props.color || "var(--text1)"};
    line-height: 20px;
`