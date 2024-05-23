import styled from "styled-components";

export const SearchWrap = styled.section`
    display: flex;
    margin-bottom: 40px;
`

export const SearchContainer = styled.div`
    display: flex;
    width: 100%;
`

export const SearchWrapInner = styled.div`
    position: relative;
    max-width: 35%;
    width: 100%;
    transition: .3s ease-in-out;
    transition-property: max-width;

    svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;

        path {
            stroke: var(--text1);
        }   
    }

    &.active {
        max-width: 90%;
    }
`

export const SearchInput = styled.input`
    width: 100%;
    height: 36px;
    border: 1px solid var(--stroke2);
    border-radius: 20px;
    padding: 0 15px 0 35px;
    font-size: .875rem;
    color: var(--text1);

    &::placeholder {
        color: var(--disabled);
    }
`

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;

    svg {
        position: static;
        transform: none;

        path {
            fill: var(--text1);
        }
    }

`