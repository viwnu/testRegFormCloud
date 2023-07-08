import { styled } from "styled-components"

const StyledStepper = styled.ul`
    width: 100%;
    padding: 0 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media ${props => props.theme.media.pcSmall} {
        padding: 0 2rem;
        height: 4rem;
    }
    @media ${props => props.theme.media.tablet} {
        padding: 0 2rem;
        height: 4rem;
    }
    @media ${props => props.theme.media.phone} {
        padding: 0 0.75rem;
    }
`

export default StyledStepper