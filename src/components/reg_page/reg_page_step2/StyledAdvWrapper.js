import { styled } from "styled-components";

const StyledAdvWrapper =styled.div`
    width: 100%;
    display: flex;
    @media ${props => props.theme.media.phone} {
        gap: 0.5rem;
    }
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

export default StyledAdvWrapper