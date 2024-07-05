import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
    flex-direction: ${props => props.flexDirection};
`;

export default function Container ({ children, alignItems, justifyContent, flexDirection}) {
    return (
        <Div alignItems={alignItems} justifyContent={justifyContent} flexDirection={flexDirection}>
            {children}
        </Div>
    )
}