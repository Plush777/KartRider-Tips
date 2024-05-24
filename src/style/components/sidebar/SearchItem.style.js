import styled from "styled-components";

export const SearchWrap = styled.div`
    display: flex;
    width: 100%;
    padding-left: var(--sidebar-padding);
`

export const SearchContainer = styled.div`
    display: flex;
    width: 100%;
`

export const SearchWrapInner = styled.div`
    position: relative;
    width: 100%;
    max-width: 95%;
`

export const SearchLabel = styled.label`
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;

    svg {
        path {
            stroke: var(--text1);
        }
    }
`

export const SearchInput = styled.input`
    width: 100%;
    height: 36px;
    border: 1px solid var(--stroke2);
    border-radius: 20px;
    padding-left: 35px;
    padding-right: 40px;
    font-size: .875rem;
    color: var(--text1);
    background-color: var(--background1);

    &::placeholder {
        color: var(--disabled);
    }
`

export const RemoveButton = styled.button`
    display: none;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;

    svg {
        path {
            fill: var(--text1);
        }
    }

    &.active {
        display: flex;
    }
`