import styled from "styled-components";

export const Wrap = styled.div`
    ${props => props.type === 'grid' && `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-auto-rows: 240px;
        column-gap: 20px;
        row-gap: 80px;

        .bottom {
            min-height: 20px;
            max-height: 40px;
        }
    `}
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    width: 100%;
    height: 100%;

    .top, .bottom {
        width: 100%;
        height: 100%;
    }
`

export const Top = styled.div`
    border-radius: 4px;
    background-color: var(--background1);
    transition: background-color .3s ease-in-out;
`

export const Bottom = styled(Top)`
    
`