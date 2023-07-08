import styled from 'styled-components'

const StyledFormCard = styled.div`
    width: 100%;
    padding: 1.5rem;
    min-height: 44rem;
    background: white;
    border-radius: 12px;
    background: var(--grey-0-white, #FFF);
    @media ${props => props.theme.media.pcSmall} {
        min-height: 30rem;
    }
    @media ${props => props.theme.media.tablet} {
        border-radius: 0;
        min-height: 100vh;
        font-size: ${props => props.theme.size.tablet};
    }
    @media ${props => props.theme.media.phone} {
        border-radius: 0;
        min-height: 100vh;
        font-size: ${props => props.theme.size.phone};
    }
`
export {StyledFormCard}