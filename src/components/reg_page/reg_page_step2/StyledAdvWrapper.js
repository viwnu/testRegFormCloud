import { styled } from "styled-components";

const StyledAdvWrapper =styled.div`
    width: 100%;
    display: flex;
    @media ${props => props.theme.media.phone} {
        gap: 0.5rem;
    }
    div {
        display: flex;
        flex-direction: column;
        @media ${props => props.theme.media.pcSmall},
        ${props => props.theme.media.tablet},
        ${props => props.theme.media.phone} {
            width: 100%;
        }
    }
`

export default StyledAdvWrapper