import { styled } from "styled-components"

const StyledWrapper = styled.div`
    min-height: 100vh;
    padding: 2% 17%;
    background: ${props => props.theme.colors.bgLayoutWhite || white};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media ${props => props.theme.media.pcSmall} {
        padding: 2%;
    }
    @media ${props => props.theme.media.tablet} {
        padding: 0;
    }
    @media ${props => props.theme.media.phone} {
        padding: 0;
    }
`

export default function Container(props) {
    return (
        <StyledWrapper {...props}/>
    )
  }